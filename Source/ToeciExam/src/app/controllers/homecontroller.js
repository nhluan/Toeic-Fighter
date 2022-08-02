class HomeController {
  //home page
  index(req, res, next) {
    console.log(req.session.authUser);
    res.render("home", { layout: false });
  }
}
module.exports = new HomeController();
