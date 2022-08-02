class BlogController {
    showBlog(req, res, next) {
      res.render("blog");
    }
  }
  module.exports = new BlogController();
  