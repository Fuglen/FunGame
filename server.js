var express = require("express");

var app = express().use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

var port = 3000;
app.listen(port, function() {
  console.log("server listening on port " + port);
});
