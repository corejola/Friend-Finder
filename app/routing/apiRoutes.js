// Loading in data from friends.js, which is the array of objects input by the user
// ===============================================================================

var friends = require('../data/friends');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //data validation for req.body...
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
    });
};