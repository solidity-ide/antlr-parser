"use strict";
exports.__esModule = true;
require("rxjs/add/operator/filter");
var SolidityParser_1 = require("../lib/SolidityParser");
var parser = new SolidityParser_1.SolidityParser(true);
parser.Observable()
    .filter(function (r) { return r.type !== "enterEveryRule" && r.type !== "exitEveryRule"; })
    .subscribe(function (rule) { return console.log(rule.type); }, function (err) { return console.error(err); }, function () { return console.log("Complete"); });
parser.ErrorObservable().subscribe(function (e) { return console.log(e); });
parser.parseFile("./voting.sol", "auction.sol");
