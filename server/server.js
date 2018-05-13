const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    
const app = express();
app.listen("3001");
app.use(cors());
app.use(bodyParser.json());

app.get("url", (req, res) => {

});

app.post("url", (req, res, next) => {
    
});

module.exports = app;
