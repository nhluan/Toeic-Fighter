class DiscussionController {
    showDiscusion(req, res, next) {
      res.render("discussion");
    }
  }
  module.exports = new DiscussionController();
  