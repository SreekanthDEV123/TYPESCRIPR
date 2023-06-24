"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "java") {
        next();
    }
    else {
        res.status(401).json({ auth: "Failed" });
    }
};
app.post("/signin", [auth], function (req, res) {
    if (req.body.uname === "bahu" && req.body.upwd === "ball") {
        res.status(200).json({ name: "sree" });
    }
    else {
        res.status(401).json({ signin: "Failed" });
    }
});
app.get("/sign", function (req, res) {
    res.send("server success");
});
app.listen(7680, function () {
    console.log("success");
});
