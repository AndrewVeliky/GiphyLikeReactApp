const express = require("express"),
    bodyParser = require("body-parser"),
    User = require("./Models/User");
    
const app = express();

var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:3001/Giphydb';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen("3001", function() {
    console.log('ready to go!');
});

app.use(bodyParser.json());
const jsonParser  = bodyParser.json();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/user", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    User.create({
        name: request.body.name,
        lastName: request.body.lastName,
        login: request.body.login,
        password: request.body.password,
        email: request.body.email
    }, (err, doc) => {
        mongoose.disconnect();
        if(err) return console.log(err);
        console.log("Сохранен объект user", doc);
    });

    response.status(204).end();
});




