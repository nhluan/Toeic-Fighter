const homeRouter = require("./home")
const testRouter = require("./test")
const authRouter = require("./auth.route")
const blogRouter = require("./blog.route")
const discussionRouter = require("./discussion.route")
function route(app) {
  app.use("/auth", authRouter)
  app.use("/test",testRouter)
  app.use("/blog",blogRouter)
  app.use("/discussion",discussionRouter)
  app.use("/", homeRouter)
}

module.exports = route;
