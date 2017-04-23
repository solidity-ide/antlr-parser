
import { Subject }    from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export const ErrorListener: FunctionConstructor = require("antlr4").error.ErrorListener;

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
     * 
     */
    public Observable (): Observable<ISyntaxErrorEvent> {
        return this.subject.asObservable();
    }
    
    /**
     * 
     */
    public complete (): void {
        this.subject.complete();
    }
}
