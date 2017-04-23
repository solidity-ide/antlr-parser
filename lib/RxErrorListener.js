"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
exports.ErrorListener = require("antlr4").error.ErrorListener;
/**
 *
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
     *
     */
    Observable() {
        return this.subject.asObservable();
    }
    /**
     *
     */
    complete() {
        this.subject.complete();
    }
}
exports.RxErrorListener = RxErrorListener;
//# sourceMappingURL=RxErrorListener.js.map