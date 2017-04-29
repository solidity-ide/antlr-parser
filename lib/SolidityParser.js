"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4 = require("antlr4");
const Lexer = require("../parser/SolidityLexer").SolidityLexer;
const Parser = require("../parser/SolidityParser").SolidityParser;
const RxErrorListener_1 = require("./RxErrorListener");
const RxRuleListener_1 = require("./RxRuleListener");
/**
 * SolidityParser Class
 *
 * The main class for parsing Solidity code. Provides Observables that emit rule
 * contexts and syntax errors.
 */
class SolidityParser {
    /**
     * Initializes a SolidityParser instance.
     * @param {boolean} [fireComplete=false] - If true, the Observables will complete after the first parsing.
     */
    constructor(fireComplete = false) {
        this.fireComplete = fireComplete;
        this.ruleListener = new RxRuleListener_1.RxRuleListener();
        this.errorListener = new RxErrorListener_1.RxErrorListener();
        this.isComplete = false;
    }
    /**
     * Parses Solidity code provided as a string.
     * @param code - source code text.
     */
    parseText(...code) {
        code.forEach(c => this.parseStream(new antlr4.InputStream(c, true)));
    }
    /**
     * Loads and parses Solidity code from a file.
     * @param path - the absolute path to a file.
     */
    parseFile(...path) {
        path.forEach(p => this.parseStream(new antlr4.FileStream(p)));
    }
    /**
     * Emits Rule Context events as it walks the tree of parsed Solidity code.
     */
    Observable() {
        return this.ruleListener.Observable();
    }
    /**
     * Emits any Syntax Error events from parsed Solidity code.
     */
    ErrorObservable() {
        return this.errorListener.Observable();
    }
    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    complete() {
        this.ruleListener.complete();
        this.errorListener.complete();
        this.isComplete = true;
    }
    /**
     * Consumes InputStream instances.
     * @param stream - InputStream to consume.
     */
    parseStream(stream) {
        if (this.isComplete) {
            throw new EvalError("The Observable has been completed.");
        }
        const lexer = new Lexer(stream);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new Parser(tokens);
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        parser.addErrorListener(this.errorListener);
        const tree = parser.sourceUnit();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.ruleListener, tree);
        parser.removeErrorListeners();
        if (this.fireComplete) {
            this.complete();
        }
    }
}
exports.SolidityParser = SolidityParser;
//# sourceMappingURL=SolidityParser.js.map