// Generated from Solidity.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SolidityParser.

function SolidityVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SolidityVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SolidityVisitor.prototype.constructor = SolidityVisitor;

// Visit a parse tree produced by SolidityParser#sourceUnit.
SolidityVisitor.prototype.visitSourceUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#pragmaDirective.
SolidityVisitor.prototype.visitPragmaDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#pragmaName.
SolidityVisitor.prototype.visitPragmaName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#pragmaValue.
SolidityVisitor.prototype.visitPragmaValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#version.
SolidityVisitor.prototype.visitVersion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#versionOperator.
SolidityVisitor.prototype.visitVersionOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#versionConstraint.
SolidityVisitor.prototype.visitVersionConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#importDeclaration.
SolidityVisitor.prototype.visitImportDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#importDirective.
SolidityVisitor.prototype.visitImportDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#contractDefinition.
SolidityVisitor.prototype.visitContractDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#inheritanceSpecifier.
SolidityVisitor.prototype.visitInheritanceSpecifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#contractPart.
SolidityVisitor.prototype.visitContractPart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#stateVariableDeclaration.
SolidityVisitor.prototype.visitStateVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#usingForDeclaration.
SolidityVisitor.prototype.visitUsingForDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#structDefinition.
SolidityVisitor.prototype.visitStructDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#modifierDefinition.
SolidityVisitor.prototype.visitModifierDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#functionDefinition.
SolidityVisitor.prototype.visitFunctionDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#eventDefinition.
SolidityVisitor.prototype.visitEventDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#enumValue.
SolidityVisitor.prototype.visitEnumValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#enumDefinition.
SolidityVisitor.prototype.visitEnumDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#indexedParameterList.
SolidityVisitor.prototype.visitIndexedParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#parameterList.
SolidityVisitor.prototype.visitParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#typeNameList.
SolidityVisitor.prototype.visitTypeNameList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#variableDeclaration.
SolidityVisitor.prototype.visitVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#typeName.
SolidityVisitor.prototype.visitTypeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#userDefinedTypeName.
SolidityVisitor.prototype.visitUserDefinedTypeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#mapping.
SolidityVisitor.prototype.visitMapping = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#functionTypeName.
SolidityVisitor.prototype.visitFunctionTypeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#storageLocation.
SolidityVisitor.prototype.visitStorageLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#block.
SolidityVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#statement.
SolidityVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#expressionStatement.
SolidityVisitor.prototype.visitExpressionStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#ifStatement.
SolidityVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#whileStatement.
SolidityVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#placeholderStatement.
SolidityVisitor.prototype.visitPlaceholderStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#simpleStatement.
SolidityVisitor.prototype.visitSimpleStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#forStatement.
SolidityVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#inlineAssemblyStatement.
SolidityVisitor.prototype.visitInlineAssemblyStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#doWhileStatement.
SolidityVisitor.prototype.visitDoWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#continueStatement.
SolidityVisitor.prototype.visitContinueStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#breakStatement.
SolidityVisitor.prototype.visitBreakStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#returnStatement.
SolidityVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#throwStatement.
SolidityVisitor.prototype.visitThrowStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#variableDeclarationStatement.
SolidityVisitor.prototype.visitVariableDeclarationStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#identifierList.
SolidityVisitor.prototype.visitIdentifierList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#elementaryTypeName.
SolidityVisitor.prototype.visitElementaryTypeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#expression.
SolidityVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#primaryExpression.
SolidityVisitor.prototype.visitPrimaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#expressionList.
SolidityVisitor.prototype.visitExpressionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#nameValueList.
SolidityVisitor.prototype.visitNameValueList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#functionCall.
SolidityVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#functionCallArguments.
SolidityVisitor.prototype.visitFunctionCallArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#newExpression.
SolidityVisitor.prototype.visitNewExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#inlineAssemblyBlock.
SolidityVisitor.prototype.visitInlineAssemblyBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#assemblyItem.
SolidityVisitor.prototype.visitAssemblyItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#assemblyLocalBinding.
SolidityVisitor.prototype.visitAssemblyLocalBinding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#assemblyAssignment.
SolidityVisitor.prototype.visitAssemblyAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#functionalAssemblyExpression.
SolidityVisitor.prototype.visitFunctionalAssemblyExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#arrayLiteral.
SolidityVisitor.prototype.visitArrayLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#tupleLiteral.
SolidityVisitor.prototype.visitTupleLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#elementaryTypeNameExpression.
SolidityVisitor.prototype.visitElementaryTypeNameExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolidityParser#numberLiteral.
SolidityVisitor.prototype.visitNumberLiteral = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SolidityVisitor = SolidityVisitor;