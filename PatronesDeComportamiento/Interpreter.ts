//Interpreter: Define una representación gramatical para un lenguaje y un intérprete que usa esa representación para interpretar oraciones en el lenguaje.

//Contexto: Interpretar expresiones matemáticas simples como "5 + 3".
// Expression Interface
interface Expression {
    interpret(): number;
}

// Terminal Expressions
class NumberExpression implements Expression {
    constructor(private number: number) {}

    interpret(): number {
        return this.number;
    }
}

// Nonterminal Expression
class AddExpression implements Expression {
    constructor(private left: Expression, private right: Expression) {}

    interpret(): number {
        return this.left.interpret() + this.right.interpret();
    }
}

// Uso
const left = new NumberExpression(5);
const right = new NumberExpression(3);
const sum = new AddExpression(left, right);

console.log(`${left.interpret()} + ${right.interpret()} = ${sum.interpret()}`);
