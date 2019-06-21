// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//data validation for Friend information, no item can be left blank, submit button on click will process the data valadation
//------------------------------------

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
