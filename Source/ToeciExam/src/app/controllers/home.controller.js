class SiteController {
    //home page
    index(req, res, next) {
        res.send('home');
    }
}
module.exports = new SiteController();
