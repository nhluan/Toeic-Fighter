class HomeController {
  //home page
  index(req, res, next) {
    res.render("home", { layout: false });
  }
}
module.exports = new HomeController();
