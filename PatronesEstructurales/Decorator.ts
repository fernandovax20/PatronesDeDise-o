//Decorator: Añade nuevas funcionalidades a un objeto de forma dinámica.

//Contexto: Agregar funcionalidades adicionales a objetos específicos sin alterar su estructura.
// Componente
interface Coffee {
    getCost(): number;
    getDescription(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
    getCost(): number {
        return 10;
    }

    getDescription(): string {
        return 'Simple coffee';
    }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }

    getCost(): number {
        return this.decoratedCoffee.getCost();
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        return super.getCost() + 2;
    }

    getDescription(): string {
        return super.getDescription() + ', milk';
    }
}

class WhipDecorator extends CoffeeDecorator {
    getCost(): number {
        return super.getCost() + 5;
    }

    getDescription(): string {
        return super.getDescription() + ', whip';
    }
}

// Uso
let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getCost()); // 10
console.log(coffee.getDescription()); // Simple coffee

coffee = new MilkDecorator(coffee);
console.log(coffee.getCost()); // 12
console.log(coffee.getDescription()); // Simple coffee, milk

coffee = new WhipDecorator(coffee);
console.log(coffee.getCost()); // 17
console.log(coffee.getDescription()); // Simple coffee, milk, whip
