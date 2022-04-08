// let url = require("url");
// let adress = "https:/localhost/home.html?year=2022&month=april&date=8";
// let q = url.parse(adress, true);
// // console.log(q);
// // console.log(q.hostname);
// // console.log(q.pathname);
// // console.log(q.search);

// let qData = q.query;
// let { year, month } = qData;
// console.log(year);

const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 5000;

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let fileName = "." + q.pathname;
    console.log(fileName);
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, { "Contet-Type": "text/html" });
        return res.end("404 not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });

    /* res.write("hello Talha");
     return res.end();*/
  })
  .listen(PORT, console.log("5000 pr chal raha hai"));
