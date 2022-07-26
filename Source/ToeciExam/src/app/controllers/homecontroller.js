class SiteController {
    //home page
    index(req, res, next) {
        res.render('home', { layout: false });
    }
    sigup(req, res, next) {
        res.render('signup', { layout: false });
    }
}
module.exports = new SiteController();
``