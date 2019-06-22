# Friend-Finder
Node &amp; Express Servers

### Pseudo Code
1. app displays homepage via server
    1. uses `app.get` to display homepage
    2. to fill out survery, click on survey button,
2. 

## Functionality

## How to Use Friend Finder


## Friend Matching Logic
1. Friend Finder compares your survey values with the the values of others.
    1. This is performed by running a loop through all the users in the friends Array of Objects
    2. Per Friend, their scores are looped through and compared against your values.
    3. All the values are pushed into a compatibility array to for comparison.
2. The best match value is determined by the user who's values have the least difference between your values.
    1. The compatibility logic determines the lowest number in the compabiliity array
    2. This value determines who your best friend, buddy or guy will be.

`var compatibility = [];
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
        console.log("Your Match is: " + friends[matchIndex].photo + "!")`
## Deployed
Friend-Finder deployed via Heroku 

## Node Packages used:
- [Express](https://www.npmjs.com/package/express)


