const express = require("express");
const getPartTestAPIcontroller = require("./app/controllers/api/getPartTest.api");
const getTestAPIcontroller = require("./app/controllers/api/getTest.api");

const router = express.Router();

const initAPIRoute = app => {
  console.log("initAPIRoute");
  router.get("/getPartTest/part:part", getPartTestAPIcontroller.getPartTest);
  router.get("/getTest/part:part", getTestAPIcontroller.getTest);
  return app.use("/api/v1", router);
};

module.exports = initAPIRoute;
