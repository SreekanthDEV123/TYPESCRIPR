"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get(("/"), function (req, res) {
    res.status(200).json({ accounts: "opened" });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname === "sreekanth" && req.query.upwd === "kumar") {
        res.status(200).json({ accounts: "succ" });
    }
    else {
        res.status(401).json({ accounts: "fail" });
    }
});
exports.default = accounts;
