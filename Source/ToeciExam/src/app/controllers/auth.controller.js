const bcrypt = require("bcrypt");
const Account = require("../models/account.model");

class authController {
  signup(req, res, next) {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      const account = new Account({
        username,
        password: hash,
      });
      account.save((err, result) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }
        return res.status(201).json({
          message: "Account created",
          result,});
        // return res.redirect("/signin");
      });
    });
  }
  signin(req, res, next) {
    const { username, password } = req.body;
    Account.findOne({ username }, (err, account) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      if (!account) {
        return res.status(401).json({
          error: "wrong username",
        });
      }
      bcrypt.compare(password, account.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            error: "Invalid credentials",
          });
        }
        if (result) {
          return res.status(200).json({
            message: "Login successful",
            account,
          });
        }
        return res.status(401).json({
          error: "Invalid credentials",
        });
      });
    });
  }
}

module.exports = new authController();
