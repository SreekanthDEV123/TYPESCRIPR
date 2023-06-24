"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import * as bodyparser from "body-parser";
var transaction = express.Router();
//app.use(bodyparser.json());
//app.use( bodyparser.urlencoded({extended:false}) );
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
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish === "spring") {
        next();
    }
    else {
        res.status(401).json({ auth1: "Failed" });
    }
};
transaction.post("/signin", [auth], [auth1], function (req, res) {
    res.send("server success");
});
exports.default = transaction;
