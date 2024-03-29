var path = require("path");

// Routing
// ============================

module.exports = function (app) {

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //default path will take you to the home page
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};