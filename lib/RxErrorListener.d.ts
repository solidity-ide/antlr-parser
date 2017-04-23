import { Observable } from "rxjs/Observable";
export declare const ErrorListener: FunctionConstructor;
import { IObservableListener } from "./IObservableListener";
/**
 * Interface for events emitted by the RxErrorListener class.
 */
export interface ISyntaxErrorEvent {
    line: number;
    column: number;
    message: string;
    error: Error;
}
/**
 * RxErrorListener Class.
 *
 * Emits events for Syntax Errors from parsed Solidity code.
 */
export declare class RxErrorListener extends ErrorListener implements IObservableListener<ISyntaxErrorEvent> {
    private subject;
    constructor();
    /**
     * For internal use only.
     */
    syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, message: string, error: Error): void;
    /**
     * Emits any Syntax Error events from parsed Solidity code.
     */
    Observable(): Observable<ISyntaxErrorEvent>;
    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    complete(): void;
}
