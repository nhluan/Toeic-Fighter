

module.exports = {
    restrict:(req, res, next) =>
    {
        if(!req.session.isAuth)
        {
            res.redirect('/auth/signin');
        }
        next();
    }
}