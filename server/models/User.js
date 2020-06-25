const bcrypt = require("bcrypt");
const mongoose = require("../config/mongoose");

const SALT_ROUNDS = 8;

const { Schema } = mongoose;
const { Types } = Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    // https://tylermcginnis.com/validate-email-address-javascript/
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  boss: {
    type: Boolean,
    required: true,
    default: false
  }
});

userSchema.pre("save", function() {
  if (!this.isModified("password")) {
    return Promise.resolve();
  }
  if (this.password.length < 8) {
    return Promise.reject(
      new Error("Password must have at least 8 characters")
    );
  }
  return bcrypt.hash(this.password, SALT_ROUNDS).then(hash => {
    this.password = hash;
  });
});

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

// create user and verify password example
// const email = "testuser3@email.com";
// const password = "password1234";
// User.create({
//   email,
//   password
// })
//   .then(user => console.log({ user }))
//   .then(() => User.findOne({ email }))
//   .then(user => {
//     return user.verifyPassword(password);
//   })
//   .then(isPasswordVerified => {
//     console.log({ isPasswordVerified });
//     return User.deleteOne({ email });
//   })
//   .then(() => mongoose.connection.close())
//   .catch(error => {
//     console.log(error);
//     mongoose.connection.close();
//   });
