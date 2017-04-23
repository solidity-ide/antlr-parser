"use strict";
exports.__esModule = true;
require("rxjs/add/operator/filter");
var SolidityParser_1 = require("../lib/SolidityParser");
var parser = new SolidityParser_1.SolidityParser();
parser.Observable()
    .filter(function (r) { return r.type !== "enterEveryRule"; })
    .filter(function (r) { return r.type !== "exitEveryRule"; })
    .subscribe(function (rule) { return console.log(rule.type); });
parser.ErrorObservable().subscribe(function (e) { return console.log(e); });
parser.parseFile("./voting.sol");
