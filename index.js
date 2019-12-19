var express = require("express");
var app = express();
var port = process.env.PORT || 3000; // Useful for server configuration like Heroku

// Dealing with the CORS issue
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});

app.get("/", function(req, res) {
  res.send("Hello world :)");
});

app.get("/example/:id", function(req, res) {
  res.send(`Hello ${req.params.id}`);
});

app.listen(port, function() {
  console.log("Example app listening on port 3000!");
});
