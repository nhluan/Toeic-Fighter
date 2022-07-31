const homeRouter = require("./home");
const testRouter = require("./test");
const authRouter = require("./auth.route");

function route(app) {
  app.use("/auth", authRouter)
  app.use("/test",testRouter)
  app.use("/", homeRouter);
}

module.exports = route;
