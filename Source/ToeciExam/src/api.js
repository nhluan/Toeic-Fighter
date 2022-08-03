const express = require("express");
const APIcontroller = require("./app/controllers/api/getPart.api");
const router = express.Router();

const initAPIRoute = app => {
  console.log("initAPIRoute");
  router.get("/getTest/part:part/test:test", APIcontroller.getPartTest);
  return app.use("/api/v1", router);
};

module.exports = initAPIRoute;
