import { Observable } from "rxjs/Observable";
import { IObservableListener } from "./IObservableListener";
export declare const SolidityListener: FunctionConstructor;
/**
 *
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
 *
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
 *
 */
export interface IRuleContextEvent {
    type: string;
    context: RuleContext;
}
/**
 *
 */
export declare class RxRuleListener extends SolidityListener implements IObservableListener<IRuleContextEvent> {
    private subject;
    constructor();
    /**
     *
     */
    Observable(): Observable<IRuleContextEvent>;
    /**
     *
     */
    complete(): void;
}
