// Loading in data from friends.js, which is the array of objects input by the user
// ===============================================================================

var friends = require('../data/friends');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // app.post("/api/friends", function (res, req) {

    // });
};