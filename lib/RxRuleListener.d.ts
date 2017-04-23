import { Observable } from "rxjs/Observable";
import { IObservableListener } from "./IObservableListener";
export declare const SolidityListener: FunctionConstructor;
/**
 * The Token interface.
 */
export interface Token {
    source: string;
    type: number;
    channel: number;
    start: number;
    stop: number;
    tokenIndex: number;
    line: number;
    column: number;
    text: string;
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
    depth(): number;
    isEmpty(): boolean;
    getChild(index: number): RuleContext | null;
    getSymbol(): string;
    getParent(): RuleContext;
    getPayload(): string;
    getChildCount(): number;
    getSourceInterval(): any;
    getText(): string;
    toString(): string;
    toStringTree(): string;
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
export declare class RxRuleListener extends SolidityListener implements IObservableListener<IRuleContextEvent> {
    private subject;
    constructor();
    /**
     * Emits Rule Context events as it walks the tree of parsed Solidity code.
     */
    Observable(): Observable<IRuleContextEvent>;
    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    complete(): void;
}
