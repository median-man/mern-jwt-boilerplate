const express = require("express");
const path = require("path");
const logger = require("morgan");
const jwt = require("./config/jwt");
const { User } = require("./models");
const {
  UNAUTHORIZED,
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR
} = require("./utils/http-status-codes");

const app = express();
app.set("port", process.env.PORT || 3007);
app.use(logger("dev"));
app.use(express.json());

const { initPassport, authenticate } = require("./config/passport");
initPassport(app, User);

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) {
        return user.verifyPassword(password).then(isVerified => {
          if (isVerified) {
            const jwtPayload = { id: user.id };
            return res.json({ token: jwt.sign(jwtPayload) });
          }
          return Promise.reject();
        });
      }
      return Promise.reject();
    })
    .catch(error => {
      res.status(UNAUTHORIZED).send("Unauthorized");
    });
});

app.post("/api/users", (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //Fetch from usertable to make sure no duplicates-
  User.findOne({ email }).then(user => {
    res.status(BAD_REQUEST).send("Account already exists.");
  });
  User.create({ email, password, firstName, lastName })
    .then(user => res.end())
    .catch(error => {
      const DUPLICATE_KEY_ERROR_CODE = 11000;
      const { name, code, path } = error;
      if (name === "MongoError" && code === DUPLICATE_KEY_ERROR_CODE) {
        res.status(BAD_REQUEST).send("Email invalid");
      }
      if (name === "ValidationError") {
        res.status(BAD_REQUEST).send("Invalid email or password format.");
      }
      if (name === "Error" && error.message) {
        res.status(BAD_REQUEST).send(error.message);
      }
      res.status(SERVER_ERROR).end();
    });
});

app.get("/api/users/:id", authenticate(), (req, res) => {
  // prevent logged in user from accessing other user accounts
  if (req.user.id !== req.params.id) {
    return res.status(UNAUTHORIZED).send("Unauthorized");
  }
  return User.findById(req.params.id).then(user => {
    if (user) {
      return res.json({ user });
    }
    return res.status(NOT_FOUND).send("User not found");
  });
});

// Serve static assets in production only
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

module.exports = { app };
