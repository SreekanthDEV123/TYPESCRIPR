"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts_1 = require("./accounts");
var cards_1 = require("./cards");
var transaction_1 = require("./transaction");
var app = express();
app.use("/acc", accounts_1.default);
app.use("/tra", transaction_1.default);
app.use("/car", cards_1.default);
app.listen(8081, function () {
    console.log("bank transactions succesfull");
});
