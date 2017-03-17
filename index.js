var express = require("express");
var log = console;
var app = express();

app.get("/", function(req, res) {
    res.send("Hello Fantoft!");
});

var port = 5075;

app.listen(port, function() {
    log.info(`Fantoft Tenants Union Website listening on port ${port}!`);
});
