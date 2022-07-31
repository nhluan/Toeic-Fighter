const express = require("express");
const path = require("path")
const morgan = require("morgan");
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require("./config/database");
const session = require("express-session")

const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, 'Public')))

app.engine('hbs', handlebars.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))
console.log(path.join(__dirname, 'resources', 'views'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect();

app.use(morgan("combined"));

app.use (session({
  secret: 'abcdefg',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});