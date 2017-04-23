"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
exports.ErrorListener = require("antlr4").error.ErrorListener;
/**
 * RxErrorListener Class.
 *
 * Emits events for Syntax Errors from parsed Solidity code.
 */
class RxErrorListener extends exports.ErrorListener {
    constructor() {
        super();
        this.subject = new Subject_1.Subject();
    }
    /**
     * For internal use only.
     */
    syntaxError(recognizer, offendingSymbol, line, column, message, error) {
        this.subject.next({ line, column, message, error });
    }
    /**
     * Emits any Syntax Error events from parsed Solidity code.
     */
    Observable() {
        return this.subject.asObservable();
    }
    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    complete() {
        this.subject.complete();
    }
}
exports.RxErrorListener = RxErrorListener;
//# sourceMappingURL=RxErrorListener.js.map