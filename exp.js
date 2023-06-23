"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var app = express();
app.get("/sreekanth", function (req, res) {
    res.status(200).json({ "name": "sreekanth" });
});
app.use("/mode", transaction_1.default);
app.listen(8959, function () {
    console.log("succesfull");
});
