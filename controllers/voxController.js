const Compare = require("./compare.js");
let Phrase = require("../models/Phrase.js");
let User = require("../models/User.js");
var path = require("path");

module.exports = function (app) {

    // returns only one random phrase for now
    app.get("/phrases", function (req, res) {

        // array to store just one random phrase
        let onePhrase = [];

        Phrase.find({}, function (error, data) {
            if (error) {
                console.log(error);
            }
            else {
                onePhrase.push(data[Math.floor(Math.random() * data.length)]);
                res.json(onePhrase);
            }
        });
    });

    // gets all users that are logged in
    app.get("/users", function (req, res) {

        User.find({isLoggedIn: true}, function (error, data) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("data: " + data);
                res.json(data);
            }
        });
    });

    app.post("/user", function(req, res) {

        let status = "";

        User.find({username: req.body.username}, function(error, data) {

            if(data.length > 0) {
                if(data[0].password === req.body.password) {
                    status = "authenticated";
                }
                else(status = "invalid password");
            }

            else {
                status = "username not found";
            }
            res.json(status);
        });

    });

    app.post("/user/new", function (req, res) {

        User.create({
            username: req.body.username,
            password: req.body.password,
            isLoggedIn: true
        }, function(data) {
            console.log("data: " + data);
            res.json(data);
        });
    });

    // post route to compare two strings
    app.post("/compare", function (req, res) {

        targetPhrase = req.body.targetPhrase;
        userPhrase = req.body.userPhrase;

        let match = Compare.compare(targetPhrase, userPhrase);

        res.json(match.numMatchedTokens + " out of " + match.numTargetTokens + " words: " +
            (match.percentage * 100).toFixed(1).toString() + "% Match (" + match.numCharactersMatched + " / " +
            match.numTotalCharacters + " characters)");
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}