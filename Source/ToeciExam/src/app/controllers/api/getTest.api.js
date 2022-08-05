// const part1Model = require("../../models/part1.model");
const Test = require("../../models/test.model");

const getTest= (req, res, next) => {
  var part = req.params.part;
    if (part >= 1 && part <= 7) {
      Test.find({ part }, function (err, tests) {
        if (err) {
          console.log("khong tim thay part");
          console.log(err);
          return res.status(500).json({ message: "khong tìm thấy" });
        }
        return res.status(200).json({ message: "OK", data: tests });
      });
    }
};

module.exports = {
  getTest,
};
