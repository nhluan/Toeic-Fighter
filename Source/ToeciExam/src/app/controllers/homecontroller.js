class HomeController {
  //home page
  index(req, res, next) {
    console.log(req.session.authUser);
    res.render("home");
  }
}
module.exports = new HomeController();
