module.exports = function (app) {
  app.use(function (req, res, next) {
    if (req.session.isAuth === null) {
      req.session.isAuth = false;
    }
    res.locals.lcIsAuth = req.session.isAuth;
    res.locals.lcAuthUser = req.session.authUser;
    next();
  });
};
