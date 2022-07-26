class SiteController {
    //home page
    index(req, res, next) {
        res.render('home', { layout: false });
    }
}
module.exports = new SiteController();
``