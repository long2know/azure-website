// Requirements
var express = require("express");
var http = require("http");
var ejsLayouts = require("express-ejs-layouts");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var welcome = require("./routes/welcome.js");
var setLanguage = require("./routes/setLanguage.js");
var flashcard = require("./routes/flashcard.js");

// Set up the application
var app = express();
app.set("port", process.env.PORT || 8080);
app.set("view engine","ejs");
app.use(ejsLayouts);
app.set("layout extractScripts", true);
app.set("views","./views");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.get("/", welcome);
app.post("/set-language", setLanguage);
app.get("/flashcard", flashcard);

// Run up the server
http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"));
});