class SiteController {
    //home page
    index(req, res, next) {
        res.render('signin', { layout: false });
    }
    sigup(req, res, next) {
        res.render('signup', { layout: false });
    }
}
module.exports = new SiteController();
``