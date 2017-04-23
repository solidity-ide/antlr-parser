"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4 = require("antlr4");
const Lexer = require("../parser/SolidityLexer").SolidityLexer;
const Parser = require("../parser/SolidityParser").SolidityParser;
const RxRuleListener_1 = require("./RxRuleListener");
const RxErrorListener_1 = require("./RxErrorListener");
/**
 * SolidityParser Class
 *
 * The main class for parsing Solidity code. Provides Observables that emit rule
 * contexts and syntax errors.
 */
class SolidityParser {
    constructor() {
        this.ruleListener = new RxRuleListener_1.RxRuleListener();
        this.errorListener = new RxErrorListener_1.RxErrorListener();
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
     * Consumes InputStream instances.
     * @param stream
     */
    parseStream(stream) {
        const lexer = new Lexer(stream);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new Parser(tokens);
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        parser.addErrorListener(this.errorListener);
        const tree = parser.sourceUnit();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.ruleListener, tree);
        parser.removeErrorListeners();
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
    }
}
exports.SolidityParser = SolidityParser;
//# sourceMappingURL=SolidityParser.js.map