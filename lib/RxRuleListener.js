"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
exports.SolidityListener = require("../parser/SolidityListener").SolidityListener;
/**
 * RxRuleListener Class.
 *
 * Listener for Rule Context events when walking the parsed tree of Solidity code.
 */
class RxRuleListener extends exports.SolidityListener {
    constructor() {
        super();
        this.subject = new Subject_1.Subject();
        return new Proxy(this, {
            get: function (target, name) {
                if ((name.toString().startsWith("enter") || name.toString().startsWith("exit")) && typeof target[name] === "function") {
                    return function (context) {
                        target[name](context);
                        target.subject.next({ type: name.toString(), context });
                    };
                }
                else {
                    return target[name];
                }
            },
        });
    }
    /**
     * Emits Rule Context events as it walks the tree of parsed Solidity code.
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
exports.RxRuleListener = RxRuleListener;
//# sourceMappingURL=RxRuleListener.js.map