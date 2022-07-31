
class testController {
  showTest(req,res,next){
        res.render("test", { layout : false });
  }
  showPart(req, res,next) {
    var part = req.params.part
    if (part >=1 && part <=7 ){
      res.render("part",{ part : part} );
    }
    else res.render("test",{layout : false})
  }


 showPartTest(req,res,next){
  var part = req.params.part
  var test = req.params.test
  if (part == 1 ){
    res.render("part1_test",{ test : test} );
  }
  else if (part == 2 ){
    res.render("part2_test",{ test : test} );
  }
  else if (part == 3 ){
    res.render("part3_test",{ test : test} );
  }
  else if (part == 4 ){
    res.render("part4_test",{ test : test} );
  }
  else if (part == 5 ){
    res.render("part5_test",{ test : test} );
  }
  else if (part == 6 ){
    res.render("part6_test",{ test : test} );
  }
  else if (part == 7 ){
    res.render("part7_test",{ test : test} );
  }
 }
 
}

    
module.exports = new testController(); 
