const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.render("user");
});

router.get("/list", (req, res) => {
  res.send("hello list");
});


module.exports = router
