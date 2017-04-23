
import { Subject }    from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

import { IObservableListener } from "./IObservableListener";

export const SolidityListener: FunctionConstructor = require("../parser/SolidityListener").SolidityListener;

/**
 * The Token interface.
 */
export interface Token {
	source: string;
	type: number;       // token type of the token
	channel: number;    // The parser ignores everything not on DEFAULT_CHANNEL
	start: number;      // optional; return -1 if not implemented.
	stop: number;       // optional; return -1 if not implemented.
	tokenIndex: number; // from 0..n-1 of the token object in the input stream
	line: number;       // line=1..n of the 1st character
	column: number;     // beginning of the line at which it occurs, 0..n-1
	text: string;       // text of the token.
}

/**
 * The context interface of the RuleContextEvent.
 */
export interface RuleContext {
    parentCtx: RuleContext;
    invokingState: number;
    ruleIndex: number;
    children: RuleContext[];
    start: Token | null;
    stop: Token | null;
    parser: any;
    depth (): number;
    isEmpty (): boolean;
    getChild (index: number): RuleContext | null;
    getSymbol (): string;
    getParent (): RuleContext;
    getPayload (): string;
    getChildCount (): number;
    getSourceInterval (): any;
    getText (): string;
    toString (): string;
    toStringTree (): string;
}

/**
 * The interface of the RuleContext events emitted by the RxRuleListener class.
 */
export interface IRuleContextEvent {
    type: string;
    context: RuleContext;
}

/**
 * RxRuleListener Class.
 * 
 * Listener for Rule Context events when walking the parsed tree of Solidity code.
 */
export class RxRuleListener extends SolidityListener implements IObservableListener<IRuleContextEvent> {

    private subject = new Subject<IRuleContextEvent>();

    public constructor () {
        super();
        return new Proxy(this, {
            get: function (target, name) {
                if ((name.toString().startsWith("enter") || name.toString().startsWith("exit")) && typeof (target as any)[name] === "function") {
                    return function (context: RuleContext) {
                        (target as any)[name](context);
                        target.subject.next({ type: name.toString(), context, });
                    }
                } else {
                    return (target as any)[name];
                }
            }
        });
    }

    /**
     * Emits Rule Context events as it walks the tree of parsed Solidity code.
     */
    public Observable (): Observable<IRuleContextEvent> {
        return this.subject.asObservable();
    }
    
    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    public complete (): void {
        this.subject.complete();
    }
}
