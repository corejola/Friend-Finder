// Loading in data from friends.js, which is the array of objects input by the user
// ===============================================================================

var friends = require('../data/friends');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //data validation for req.body...
    app.post("/api/friends", function (req, res) {

        // function to compare req.body with all of the objects in the friends array to determine which attributes yield the smallest difference
        console.log(req.body);
        var compatibility = [];
        for (var j = 0; j < friends.length; j++) {
            var scores = []
            for (var i = 0; i < friends[j].scores.length; i++) {
                scores.push(Math.abs(parseInt(friends[j].scores[i]) - parseInt(req.body.scores[i])));
            }
            // console.log(scores)
            matchScore = scores.reduce((total, match) => total + match, 0);
            // console.log(matchScore);
            compatibility.push(matchScore);
        };
        console.log("compatibilty scores: " + compatibility)
        var match = Math.min.apply(null, compatibility)
        console.log("Your Match Score " + match)
        var matchIndex = compatibility.indexOf(match);
        console.log("Your Match is: " + friends[matchIndex].name + "!")
        console.log("Your Match is: " + friends[matchIndex].photo + "!")

        friends.push(req.body);
        res.json(friends[matchIndex]);

    });

};



