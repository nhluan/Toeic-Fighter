// const part1Model = require("../../models/part1.model");
const part5 = require("../../models/part5.model");
const part1Model = require("../../models/part1.model");
const part5Answer = require("../../models/part5Answer.model");
const getPartTest = (req, res, next) => {
  console.log("vo dc parrt test");
  // show thi part ? test ?
  var part = req.params.part;
  var test = req.params.test;
  console.log(req.params);
  console.log(test);
  if (part == 1) {
    console.log("\n\n\nPART1\n\n\n");
    part1Model.find(function (err, parttest) {
      if (err) {
        console.log("loi khon tim thay test");
        console.log(err);
        return res.status(500).json({ message: "khong tìm thấy" });
      }
      console.log(parttest);
      //res.render("part1_test");
      return res.status(200).json({ message: "OK", data: parttest });
    });
  } else if (part == 2) {
    res.render("part2_test", { test: test });
  } else if (part == 3) {
    res.render("part3_test", { test: test });
  } else if (part == 4) {
    res.render("part4_test", { test: test });
  } else if (part == 5) {
    console.log("\n\n\nPART5\n\n\n");
    part5.find(function (err, parttest) {
      console.log(parttest);
      if (err) {
        console.log("loix 1");
        console.log(err);
        // res.render("test", { layout: false });
      }
      return res.status(200).json({ message: "OK", data: parttest });
    });
  } else if (part == 6) {
    res.render("part6_test", { test: test });
  } else if (part == 7) {
    res.render("part7_test", { test: test });
  }
};

module.exports = {
  getPartTest,
};
