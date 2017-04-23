import { Observable } from "rxjs/Observable";
import { IRuleContextEvent } from "./RxRuleListener";
import { ISyntaxErrorEvent } from "./RxErrorListener";
/**
 * SolidityParser Class
 *
 * The main class for parsing Solidity code. Provides Observables that emit rule
 * contexts and syntax errors.
 */
export declare class SolidityParser {
    private ruleListener;
    private errorListener;
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
     * Consumes InputStream instances.
     * @param stream
     */
    private parseStream(stream);
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
}
