var express = require("express");
var showdown  = require("showdown");
var fs = require("fs");
var log = console;
var app = express();

app.use((req, res,  next) => {
    req.converter = new showdown.Converter();
    next();
});

app.get("/", function(req, res) {
    res.send("Hello Fantoft!");
});

app.get("/markdown", function(req, res) {
    var markdown = fs.readFileSync("./test.md").toString();
    var html = req.converter.makeHtml(markdown);

    res.send(html);
});

var port = 5075;

app.listen(port, function() {
    log.info(`Fantoft Tenants Union Website listening on port ${port}!`);
});
