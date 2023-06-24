"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cards = express.Router();
cards.post(("/"), function (req, res) {
    res.status(200).json({ cards: "success" });
});
exports.default = cards;
