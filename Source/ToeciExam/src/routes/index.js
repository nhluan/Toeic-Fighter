const homeRouter = require("./home");
const minitestRouter = require("./miniTest.route");
const authRouter = require("./auth.route");

function route(app) {
  app.use("/auth", authRouter)
  app.use("/minitest",minitestRouter)
  app.use("/", homeRouter);
}

module.exports = route;
