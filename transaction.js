"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express();
var transactionsData = {
    "bank": "sbi",
    "branch": "delhi"
};
transaction.get("/", function (req, res) {
    res.status(200).json({ "transaction": " 100 rs deposited" });
});
transaction.get("/Tdetails", function (req, res) {
    res.send(transactionsData);
});
//transaction .listen(8959,()=>
//{
//console.log("succesfull");
//});
//module.exports=transaction;
exports.default = transaction;
