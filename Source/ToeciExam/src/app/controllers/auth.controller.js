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
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      accountModel
        .findOne({ username: username })
        .then(user => {
          if (user)
            return res.status(400).json({ error: "username khong ton tai" });
          else {
            bcrypt.hash(password, 10, (err, hashed) => {
              if (err) {
                console.log("loi k hash duoc password");
                return res.json({ error: "lỗi sever" });
              } else {
                const newAccount = new accountModel({
                  username,
                  password: hashed,
                });
                accountModel.create(newAccount, (err, account) => {
                  if (err) {
                    console.log("loi 2");
                    console.log(err);
                    console.log(account);
                    console.log(newAccount);
                    //return res.render("signup",{layout:false});
                  } else {
                    console.log("\n\nuser created\n\n");
                    return res.json("tao tai khoan thanh cong")
                  }
                  // return res.redirect("/signin");
                });
              }
            });
          }
        })
        .catch(err => {
          res.status(500).json({ error: err });
        });
    } else {
      return res.render("signup", { layout: false });
    }
  }
  signin(req, res, next) {
    const { username, password } = req.body;
    console.log(req.body);
    accountModel.findOne({ username }, (err, account) => {
      console.log(account);
      if (err) {
        //loi server
        console.log("loi tim kiem account");
        return res.status(401).json({ error: "lỗi tìm kiếm" });
      } else {
        if (!account) {
          console.log("không tìm thấy user");
          return res.status(401).json({
            error: "không đúng username",
          });
        } else {
          console.log("\n\nuser found\n\n");
          bcrypt.compare(password, account.password, (err, result) => {
            //console.log(account.password);
            // console.log(password);
            if (err) {
              console.log("loi xac thuc password");
              return res.status(401).json({
                error_sever: "lỗi sever",
              });
            }
            console.log(result);
            if (result) {
              //delete account.password;
              console.log(account);
              req.session.isAuth = true;
              req.session.authUser = username;
              // return res.redirect("/");
              return res.json({ username: account.username });

            }
            if (!result) {
              return res.status(401).json({
                error_password: "mật khẩu không hợp lệ",
              });
            }
          });
        }
      }
    });
  }
  signout(req, res, next) {
    req.session.isAuth = false;
    req.session.authUser = null;
    return res.redirect("/");
  }
}

module.exports = new authController();
