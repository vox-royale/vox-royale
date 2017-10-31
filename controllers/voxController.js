const Compare = require("./compare.js");
let Phrase = require("../models/Phrase.js");
let User = require("../models/User.js");
var path = require("path");

module.exports = function (app, client) {

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
                res.json(data);
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
                console.log(data);
                res.json(data);
            }
        });
    });

    app.post("/user", function(req, res) {

        let status = "";

        User.find({username: req.body.username}, function(error, data) {

            // if username was found in db
            if(data.length > 0) {

                // and password is correct
                if(data[0].password === req.body.password) {
                    status = "authenticated";
                    console.log("socket: " + req.body.socket);
                    User.findOneAndUpdate({
                        username: req.body.username}, {
                            socket: req.body.socket,
                            isLoggedIn: true
                    }, function(error, data) {
                        if(error) {
                            console.log(error);
                        }
                    });
                }

                // password is incorrect
                else {
                    status = "invalid password";
                }
            }

            // username not found in db
            else {
                status = "username not found";
            }
            res.json(status);
        });

    });

    app.post("/user/new", function (req, res) {

        let status = "";
        console.log("req.body" + JSON.stringify(req.body));

        User.find({username: req.body.username}, function(error, data) {

            console.log("data after find: " + data);

            // username was found in db
            if(data.length > 0) {
                status = "user already exists";
                console.log(status);
                res.json(status);
            }

            // username not found in db
            else {
                // add user to db
                User.create({
                    username: req.body.username,
                    password: req.body.password,
                    isLoggedIn: true,
                    socket: req.body.socket
                }, function(data) {
                    status = "user added";
                    console.log(status);
                    res.json(status);
                });
            }
        });
    });

    // post route to compare two strings
    app.post("/compare", function (req, res) {

        targetPhrase = req.body.targetPhrase;
        userPhrase = req.body.userPhrase;

        let match = Compare.compare(targetPhrase, userPhrase);

        res.json(match);
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}