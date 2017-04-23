
import { Observable } from "rxjs/Observable";

const antlr4 = require("antlr4");
const Lexer = require("../parser/SolidityLexer").SolidityLexer;
const Parser = require("../parser/SolidityParser").SolidityParser;

import { IObservableListener }                from "./IObservableListener";
import { RxRuleListener, IRuleContextEvent }  from "./RxRuleListener";
import { RxErrorListener, ISyntaxErrorEvent } from "./RxErrorListener";

/**
 * SolidityParser Class
 * 
 * The main class for parsing Solidity code. Provides Observables that emit rule
 * contexts and syntax errors.
 */
export class SolidityParser {

    private ruleListener = new RxRuleListener();
    private errorListener = new RxErrorListener();

    /**
     * Parses Solidity code provided as a string.
     * @param code - source code text.
     */
    public parseText (...code: string[]): void {
        code.forEach(c => this.parseStream(new antlr4.InputStream(c, true)));
    }

    /**
     * Loads and parses Solidity code from a file.
     * @param path - the absolute path to a file.
     */
    public parseFile (...path: string[]): void {
        path.forEach(p => this.parseStream(new antlr4.FileStream(p)));
    }

    /**
     * Consumes InputStream instances.
     * @param stream 
     */
    private parseStream (stream: any): void {

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
    public Observable (): Observable<IRuleContextEvent> {
        return this.ruleListener.Observable();
    }

    /**
     * Emits any Syntax Error events from parsed Solidity code.
     */
    public ErrorObservable (): Observable<ISyntaxErrorEvent> {
        return this.errorListener.Observable();
    }

    /**
     * Cleans up the class. Basically invoking `complete()` on any Observables.
     */
    public complete (): void {
        this.ruleListener.complete();
        this.errorListener.complete();
    }
}
