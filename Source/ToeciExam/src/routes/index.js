const homeRouter = require("./home");
const authRouter = require("./auth.route");

function route(app) {
  app.use("/auth", authRouter)
  app.use("/", homeRouter);
}

module.exports = route;
