"use strict";
exports.__esModule = true;
var SolidityParser_1 = require("../lib/SolidityParser");
var parser = new SolidityParser_1.SolidityParser();
parser.Observable().subscribe(function (rule) { return console.log(rule.type); });
parser.ErrorObservable().subscribe(function (e) { return console.log(e); });
parser.parseFile("./voting.sol");
