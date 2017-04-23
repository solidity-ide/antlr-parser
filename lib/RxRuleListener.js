"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
exports.SolidityListener = require("../parser/SolidityListener").SolidityListener;
/**
 *
 */
class RxRuleListener extends exports.SolidityListener {
    constructor() {
        super();
        this.subject = new Subject_1.Subject();
        return new Proxy(this, {
            get: function (target, name) {
                if ((name.toString().startsWith("enter") || name.toString().startsWith("exit")) && typeof target[name] === "function") {
                    return function (ctx) {
                        target[name](ctx);
                        target.subject.next({
                            type: name.toString(),
                            context: ctx,
                        });
                    };
                }
                else {
                    return target[name];
                }
            }
        });
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
exports.RxRuleListener = RxRuleListener;
//# sourceMappingURL=RxRuleListener.js.map