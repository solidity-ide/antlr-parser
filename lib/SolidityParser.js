"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4 = require("antlr4");
const Lexer = require("../parser/SolidityLexer").SolidityLexer;
const Parser = require("../parser/SolidityParser").SolidityParser;
const RxRuleListener_1 = require("./RxRuleListener");
const RxErrorListener_1 = require("./RxErrorListener");
/**
 *
 */
class SolidityParser {
    constructor() {
        this.ruleListener = new RxRuleListener_1.RxRuleListener();
        this.errorListener = new RxErrorListener_1.RxErrorListener();
    }
    /**
     *
     * @param code
     */
    parseText(code) {
        this.parseStream(new antlr4.InputStream(code, true));
    }
    /**
     *
     * @param path
     */
    parseFile(path) {
        this.parseStream(new antlr4.FileStream(path));
    }
    /**
     *
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
     *
     */
    Observable() {
        return this.ruleListener.Observable();
    }
    /**
     *
     */
    ErrorObservable() {
        return this.errorListener.Observable();
    }
    /**
     *
     */
    complete() {
        this.ruleListener.complete();
        this.errorListener.complete();
    }
}
exports.SolidityParser = SolidityParser;
//# sourceMappingURL=SolidityParser.js.map