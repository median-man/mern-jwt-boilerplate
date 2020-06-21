import axios from "axios";
import decode from "jwt-decode";

const token = {
  get: () => localStorage.getItem("token"),
  set: token => localStorage.setItem("token", token),
  clear: () => localStorage.removeItem("token"),
  payload: () => {
    try {
      return decode(token.get());
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};

// Interceptor middleware for axios that adds auth token to headers.
export const addAuthHeader = config => {
  const bearerToken = token.get();
  if (bearerToken) {
    config.headers.Authorization = `Bearer ${bearerToken}`;
  }
  return config;
};

export const signup = (email, password) => {
  return axios.post("/api/users", { email, password });
};

export const login = (email, password) => {
  return axios.post("/auth/login", { email, password }).then(res => {
    token.set(res.data.token);
    console.log(token.get())

    return token.payload();
  });
};

export const logout = () => token.clear();

export const isLoggedIn = () => {
  if (!token.get()) {
    return false;
  }
  const isNotExpired = token.payload().exp > Date.now() / 1000;
  return isNotExpired;
};

export const isBoss = () => {
  token.get()
}

export const user = () => {
  if (isLoggedIn()) {
    const { id } = token.payload();
    return axios.get(`/api/users/${id}`).then(res => res.data.user);
  }
  return Promise.resolve(null);
};

export const fetchUserData = () => user();
