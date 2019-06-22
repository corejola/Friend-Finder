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
        // function to compare req.body with all of the objects in the friends array to determine which attributes yield the smallest difference

        // friendMatch(friends, req.body);
        var compatibility = [];
        for (var j = 0; j < friends.length; j++) {
            var scores = []
            for (var i = 0; i < friends[j].scores.length; i++) {
                scores.push(Math.abs(parseInt(friends[j].scores[i]) - parseInt(req.body.scores[i])));
            }
            console.log(scores)
            matchScore = scores.reduce((total, match) => total + match, 0);
            console.log(matchScore);
            compatibility.push(
                {
                    Name: friends[j],
                    compatibility: matchScore
                })

        };
        console.log(compatibility);



    });

};

function friendMatch(friends, user) {

    // loop through the friends array for each friend to be compared with the user
    // loop through the scores of a friend to compare against the user
    // find the absolute value difference between users scores
    // save the difference values for each friend/user pair into an array
    // the lowest difference value pair is the friend match
    // print modal on page display match name & photo

};

