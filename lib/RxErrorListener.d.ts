import { Observable } from "rxjs/Observable";
export declare const ErrorListener: FunctionConstructor;
import { IObservableListener } from "./IObservableListener";
/**
 *
 */
export interface ISyntaxErrorEvent {
    line: number;
    column: number;
    message: string;
    error: Error;
}
/**
 *
 */
export declare class RxErrorListener extends ErrorListener implements IObservableListener<ISyntaxErrorEvent> {
    private subject;
    constructor();
    /**
     * For internal use only.
     */
    syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, message: string, error: Error): void;
    /**
     *
     */
    Observable(): Observable<ISyntaxErrorEvent>;
    /**
     *
     */
    complete(): void;
}
