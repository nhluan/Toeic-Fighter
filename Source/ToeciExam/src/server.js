const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const route = require("./routes");

const app = express();
const port = 5000;
app.use(morgan("combined"));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
