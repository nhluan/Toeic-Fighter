const Account = require("../models/account.model");

class minitestController {
    showMiniTest(req,res){
        res.render("minitest", { layout : false });
    }
  showPart1(req, res) {
    res.render("part1", { layout: false });
  }
  minitest(res,req,next){
    const {part} = req.body.part
        
  }
}

    
module.exports = new minitestController(); 
