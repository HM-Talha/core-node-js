const express = require("express");
const app = express();
const PORT = 5000;

// let myLogger = (req,res) => {
//     console.log('console logg');
// };

var requestTime = function (req, res, next) {
  req.requestTime = Date();
  next();
};
app.use(requestTime);

// app.use(myLogger);
app.get("/", (req, res) => {
  res.send("hellow" + req.requestTime);
});

app.listen(PORT, console.log("index file 5000 pr chal rahi hai"));
