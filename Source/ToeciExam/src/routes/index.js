const siteRouter = require("./site");
const authRouter = require("./auth.route");

function route(app) {
  app.use("/auth", authRouter)
  app.use("/", siteRouter);
}

module.exports = route;
