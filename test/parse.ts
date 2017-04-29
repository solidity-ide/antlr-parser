
import "rxjs/add/operator/filter";

import { SolidityParser } from "../lib/SolidityParser";

const parser = new SolidityParser(false);

parser.Observable()
    .filter(r => r.type !== "enterEveryRule" && r.type !== "exitEveryRule")
    .subscribe(
        rule => console.log(rule.type),
        err => console.error(err),
        () => console.log("Complete"),
    );

parser.ErrorObservable().subscribe(
        e => console.log(e),
    );

parser.parseFile("./voting.sol", "auction.sol");
