
import { Observable } from "rxjs/Observable";
import { Subject }    from "rxjs/Subject";

export const ErrorListener: FunctionConstructor = require("antlr4").error.ErrorListener;

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
export class RxErrorListener extends ErrorListener implements IObservableListener<ISyntaxErrorEvent> {

    private subject = new Subject<ISyntaxErrorEvent>();

    public constructor () {
        super();
    }

    /**
     * For internal use only.
     */
    public syntaxError (recognizer: any, offendingSymbol: any, line: number, column: number, message: string, error: Error) {
        this.subject.next({ line, column, message, error });
    }
    
    /**
     * Emits any Syntax Error events from parsed Solidity code.
     */
    public Observable (): Observable<ISyntaxErrorEvent> {
        return this.subject.asObservable();
    }
    
    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    public complete (): void {
        this.subject.complete();
    }
}
