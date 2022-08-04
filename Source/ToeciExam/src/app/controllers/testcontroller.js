const Test = require("../models/test.model");
const part5 = require("../models/part5.model");
const part1Model = require("../models/part1.model");
const part5Answer = require("../models/part5Answer.model");

class testController {
  showTest(req, res, next) {
    res.render("test", { layout: false });
  }

  showPart(req, res, next) {
    // show bộ đè thi của part đó

    var part = req.params.part;
    if (part >= 1 && part <= 7) {
      Test.find({ part }, function (err, tests) {
        if (err) {
          console.log("loix 1");
          console.log(err);
          res.render("error404");
        }
        res.render("test", { tests });
      });
    } else res.render("error404");
  }

  showPartTest(req, res, next) {
    // show thi part ? test ?
    var part = req.params.part;
    var test = req.params.test;

    if (part == 1) {
      console.log("\n\n\nPART1\n\n\n");
      part1Model.find({ test }, function (err, parttest) {
        if (err) {
          console.log("loix 1");
          console.log(err);
          res.render("test", { layout: false });
        }
        return res.render("part1_test", { parttest });
        //       return res.json(parttest);
      });
    } else if (part == 2) {
      res.render("part2_test", { test: test });
    } else if (part == 3) {
      res.render("part3_test", { test: test });
    } else if (part == 4) {
      res.render("part4_test", { test: test });
    } else if (part == 5) {
      part5.find({ test }, function (err, parttest) {
        if (err) {
          console.log("loix 1");
          console.log(err);
          res.render("test", { layout: false });
          // res.json(parttest);
        }
        return res.render("part5_test", { parttest });
      });
    } else if (part == 6) {
      res.render("part6_test", { test: test });
    } else if (part == 7) {
      res.render("part7_test", { test: test });
    }
  }
  markExam(req, res, next) {
    // chấm điểm part ? test ?
  }
}

module.exports = new testController();
