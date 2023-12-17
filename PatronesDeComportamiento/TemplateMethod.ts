//Template Method: Define el esqueleto de un algoritmo en una operación, posponiendo algunos pasos a las subclases.

//Contexto: Implementar un marco para un proceso de construcción de casas, donde ciertos pasos son iguales y otros son específicos para cada tipo de casa.
// Abstract Class
abstract class HouseBuilder {
    // Template method
    public buildHouse() {
        this.buildFoundation();
        this.buildWalls();
        this.buildRoof();
        this.addExtras();
    }

    protected buildFoundation() {
        console.log("Building foundation");
    }

    protected abstract buildWalls(): void;
    protected abstract buildRoof(): void;

    protected addExtras() {
        // Optional step, can be overridden
    }
}

// Concrete Classes
class WoodenHouse extends HouseBuilder {
    protected buildWalls() {
        console.log("Building wooden walls");
    }

    protected buildRoof() {
        console.log("Building wooden roof");
    }
}

class GlassHouse extends HouseBuilder {
    protected buildWalls() {
        console.log("Building glass walls");
    }

    protected buildRoof() {
        console.log("Building glass roof");
    }

    protected addExtras() {
        console.log("Adding solar panels");
    }
}

// Uso
const woodenHouse = new WoodenHouse();
woodenHouse.buildHouse();

const glassHouse = new GlassHouse();
glassHouse.buildHouse();
