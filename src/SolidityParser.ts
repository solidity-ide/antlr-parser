
import { Observable } from "rxjs/Observable";

const antlr4 = require("antlr4");
const Lexer = require("../parser/SolidityLexer").SolidityLexer;
const Parser = require("../parser/SolidityParser").SolidityParser;

import { IObservableListener }                from "./IObservableListener";
import { RxRuleListener, IRuleContextEvent }  from "./RxRuleListener";
import { RxErrorListener, ISyntaxErrorEvent } from "./RxErrorListener";

/**
 * 
 */
export class SolidityParser {

    private ruleListener = new RxRuleListener();
    private errorListener = new RxErrorListener();

    /**
     * 
     * @param code 
     */
    public parseText (code: string): void {
        this.parseStream(new antlr4.InputStream(code, true));
    }

    /**
     * 
     * @param path 
     */
    public parseFile (path: string): void {
        this.parseStream(new antlr4.FileStream(path));
    }

    /**
     * 
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
     * 
     */
    public Observable (): Observable<IRuleContextEvent> {
        return this.ruleListener.Observable();
    }

    /**
     * 
     */
    public ErrorObservable (): Observable<ISyntaxErrorEvent> {
        return this.errorListener.Observable();
    }

    /**
     * 
     */
    public complete (): void {
        this.ruleListener.complete();
        this.errorListener.complete();
    }
}
