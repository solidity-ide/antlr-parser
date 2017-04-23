
import "rxjs/add/operator/filter";

import { SolidityParser } from "../lib/SolidityParser";

const parser = new SolidityParser();

parser.Observable()
    .filter(r => r.type !== "enterEveryRule" && r.type !== "exitEveryRule")
    .subscribe(
        rule => console.log(rule.type),
    );

parser.ErrorObservable().subscribe(
        e => console.log(e),
    );

parser.parseFile("./voting.sol");
