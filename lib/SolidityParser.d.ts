import { Observable } from "rxjs/Observable";
import { IRuleContextEvent } from "./RxRuleListener";
import { ISyntaxErrorEvent } from "./RxErrorListener";
/**
 *
 */
export declare class SolidityParser {
    private ruleListener;
    private errorListener;
    /**
     *
     * @param code
     */
    parseText(code: string): void;
    /**
     *
     * @param path
     */
    parseFile(path: string): void;
    /**
     *
     * @param stream
     */
    private parseStream(stream);
    /**
     *
     */
    Observable(): Observable<IRuleContextEvent>;
    /**
     *
     */
    ErrorObservable(): Observable<ISyntaxErrorEvent>;
    /**
     *
     */
    complete(): void;
}
