class SiteController {
    //home page
    index(req, res, next) {
        res.render('signin', { layout: false });
    }
   
}
module.exports = new SiteController();
``