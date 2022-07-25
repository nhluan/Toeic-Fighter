class SiteController {
    //home page
    index(req, res, next) {
        res.render('signup');
    }
}
module.exports = new SiteController();
``