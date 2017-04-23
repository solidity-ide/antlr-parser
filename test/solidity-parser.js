
var SolidityParser = require("solidity-parser");

var result = SolidityParser.parseFile("./assembly.sol");

console.log(JSON.stringify(result));
