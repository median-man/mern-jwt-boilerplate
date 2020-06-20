const jwt = require("jsonwebtoken");
let { SECRET } = process.env;
const ONE_DAY = "1d";

module.exports = {
  secret: SECRET,
  sign: payload => jwt.sign(payload, SECRET, { expiresIn: ONE_DAY })
};
