"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/login", function (req, res) {
    if (req.query.uname == "encrypt" && req.query.upwd == "decrypt") {
        res.status(200).json({ "name": "sreekanth" });
    }
    else {
        res.status(400).json({ "status": "Failed" });
    }
});
app.listen(8959, function () {
    console.log("succesfull");
});
