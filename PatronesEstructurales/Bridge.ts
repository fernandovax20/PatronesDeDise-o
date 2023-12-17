//Bridge: Separa una abstracción de su implementación para que ambas puedan variar independientemente.

//Contexto: Separar la abstracción de la implementación en un sistema de renderización de UI, permitiendo diferentes plataformas y elementos de UI.
// Implementaciones de Plataforma
interface RenderAPI {
    renderCircle(radius: number): void;
}

class HTMLRenderAPI implements RenderAPI {
    renderCircle(radius: number) {
        console.log(`HTML circle with radius ${radius}`);
    }
}

class CanvasRenderAPI implements RenderAPI {
    renderCircle(radius: number) {
        console.log(`Canvas circle with radius ${radius}`);
    }
}

// Abstracción
abstract class Shape {
    protected renderApi: RenderAPI;

    constructor(renderApi: RenderAPI) {
        this.renderApi = renderApi;
    }

    abstract draw(): void;
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number, renderApi: RenderAPI) {
        super(renderApi);
        this.radius = radius;
    }

    draw(): void {
        this.renderApi.renderCircle(this.radius);
    }
}

// Uso
const htmlCircle = new Circle(5, new HTMLRenderAPI());
const canvasCircle = new Circle(10, new CanvasRenderAPI());

htmlCircle.draw();
canvasCircle.draw();
