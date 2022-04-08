const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/user", (req, res) => {
//   res.render("user");
// });

// app.get("/list", (req, res) => {
//   res.send("hello list");
// });

const userRout = require('./Routes/user')

app.use('/', userRout)

app.listen(PORT, console.log("5000  pr chhal raha hai"));
