const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require("./config/database");
const session = require("express-session");
const initAPIRoute = require("./api");

const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, "Public")));

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
console.log(path.join(__dirname, "resources", "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect();

app.use(morgan("combined"));

app.use(
  session({
    secret: "abcdefg",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1200000 },
  })
);

require("./app/middlewares/local.middleware")(app);
route(app);
initAPIRoute(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
