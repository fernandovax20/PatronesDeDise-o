//Strategy: Permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables.

//Contexto: Implementar un sistema de cálculo de rutas que puede utilizar diferentes algoritmos de navegación (por carretera, a pie, en bicicleta).
// Strategy Interface
interface RouteStrategy {
    calculateRoute(start: string, end: string): string;
}

// Concrete Strategies
class RoadStrategy implements RouteStrategy {
    calculateRoute(start: string, end: string): string {
        return `Road route from ${start} to ${end}`;
    }
}

class WalkingStrategy implements RouteStrategy {
    calculateRoute(start: string, end: string): string {
        return `Walking route from ${start} to ${end}`;
    }
}

class BikingStrategy implements RouteStrategy {
    calculateRoute(start: string, end: string): string {
        return `Biking route from ${start} to ${end}`;
    }
}

// Context
class Navigator {
    private strategy: RouteStrategy;

    constructor(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    public planRoute(start: string, end: string) {
        console.log(this.strategy.calculateRoute(start, end));
    }
}

// Uso
const navigator = new Navigator(new RoadStrategy());
navigator.planRoute("Home", "Office"); // Road route from Home to Office

navigator.setStrategy(new WalkingStrategy());
navigator.planRoute("Home", "Park"); // Walking route from Home to Park
