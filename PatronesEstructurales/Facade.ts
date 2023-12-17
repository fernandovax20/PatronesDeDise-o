//Facade: Proporciona una interfaz simplificada a un conjunto de interfaces en un subsistema.

//Contexto: Simplificar la interacción con un sistema complejo de renderizado de gráficos, proporcionando una interfaz simplificada.
// Sistema complejo
class GraphicsSystem {
    initialize() {
        console.log("Initializing graphics system");
    }

    drawShape(shape: string) {
        console.log(`Drawing a ${shape}`);
    }

    finalize() {
        console.log("Finalizing graphics system");
    }
}

// Facade
class GraphicsFacade {
    private graphicsSystem: GraphicsSystem = new GraphicsSystem();

    drawCircle() {
        this.graphicsSystem.initialize();
        this.graphicsSystem.drawShape("circle");
        this.graphicsSystem.finalize();
    }

    drawSquare() {
        this.graphicsSystem.initialize();
        this.graphicsSystem.drawShape("square");
        this.graphicsSystem.finalize();
    }
}

// Uso
const graphics = new GraphicsFacade();
graphics.drawCircle();
graphics.drawSquare();
