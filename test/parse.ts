

import { SolidityParser } from "../lib/SolidityParser";

const parser = new SolidityParser();

parser.Observable().subscribe(
    rule => console.log(rule.type),
);

parser.ErrorObservable().subscribe(
    e => console.log(e),
);

parser.parseFile("./voting.sol");
