import { Observable } from "rxjs/Observable";
import { ISyntaxErrorEvent } from "./RxErrorListener";
import { IRuleContextEvent } from "./RxRuleListener";
/**
 * SolidityParser Class
 *
 * The main class for parsing Solidity code. Provides Observables that emit rule
 * contexts and syntax errors.
 */
export declare class SolidityParser {
    private fireComplete;
    private ruleListener;
    private errorListener;
    private isComplete;
    /**
     * Initializes a SolidityParser instance.
     * @param {boolean} [fireComplete=false] - If true, the Observables will complete after the first parsing.
     */
    constructor(fireComplete?: boolean);
    /**
     * Parses Solidity code provided as a string.
     * @param code - source code text.
     */
    parseText(...code: string[]): void;
    /**
     * Loads and parses Solidity code from a file.
     * @param path - the absolute path to a file.
     */
    parseFile(...path: string[]): void;
    /**
     * Emits Rule Context events as it walks the tree of parsed Solidity code.
     */
    Observable(): Observable<IRuleContextEvent>;
    /**
     * Emits any Syntax Error events from parsed Solidity code.
     */
    ErrorObservable(): Observable<ISyntaxErrorEvent>;
    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    complete(): void;
    /**
     * Consumes InputStream instances.
     * @param stream - InputStream to consume.
     */
    private parseStream(stream);
}
