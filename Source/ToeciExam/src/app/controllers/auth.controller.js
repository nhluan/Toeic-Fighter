const bcrypt = require("bcrypt");
const accountModel = require("../models/account.model");
class authController {
  showSignup(req, res) {
    res.render("signup", { layout: false });
  }
  showSignin(req, res) {
    res.render("signin", { layout: false });
  }

  signup(req, res, next) {
    const entity = req.body;
    // const { username, password } = req.body;
    if (entity.username && entity.password) {
      accountModel.findOne(entity.username, (err, account) => {
        if (account) {
          const conflic = "user have already existed";
          console.log(conflic);
          return res.render(
            "signup",
            { layout: false },
            { username, password, conflic }
          );
        } else {
          bcrypt.hash(entity.password, 10, (err, hashed) => {
            if (err) {
              console.log("loix 1");
              console.log(err);
              return res.render("signup", { layout: false });
            } else {
              const account = new accountModel({
                username: entity.username,
                password: hashed,
              });
              accountModel.create(account, (err, account) => {
                if (err) {
                  console.log("loi 2");
                  //return res.render("signup",{layout:false});
                } else return res.status(200).json("tao tai khoan thanh cong");
                // return res.redirect("/signin");
              });
            }
          });
        }
      });
    } else {
      return res.render("signup", { layout: false });
    }
  }
  signin(req, res, next) {
    const { username, password } = req.body;
    console.log(req.body);
    accountModel.findOne({ username }, (err, account) => {
      if (err) {
        //loi server
        console.log("loi server");
        return res.render("signin");
      } else {
        if (!account) {
          console.log("user not found");
          return res.status(401).json({
            error: "wrong username",
          });
        } else {
          console.log("\n\nuser found\n\n");
          bcrypt.compare(password, account.password, (err, result) => {
            console.log(account.password);
            console.log(password);
            if (err) {
              console.log("loi server 2");
              return res.status(401).json({
                error: "Invalid credentials 1",
              });
            }
            console.log(result);
            if (result) {
              req.session.isAuth = true;
              req.session.authUser = account;

              return res.redirect("/");
            }
            if (!result) {
              console.log("loi server 3");
              return res.status(401).json({
                error: "Invalid credentials 2",
              });
            }
          });
        }
      }
    });
  }
  requireLogin(req, res, next) {
    if (req.session.username) {
      next();
    } else {
      return res.status(401).json({
        error: "Login required",
      });
    }
  }
}
module.exports = new authController();
