//Flyweight: Reduce el costo de creación y manipulación de un gran número de objetos similares.

//Contexto: Optimizar el uso de la memoria en una aplicación que dibuja múltiples árboles en un bosque, donde cada árbol comparte estados comunes como color y textura.
// Flyweight
class TreeType {
    constructor(private name: string, private color: string, private texture: string) {}

    draw(canvas: string, x: number, y: number) {
        console.log(`Drawing '${this.name}' tree on ${canvas} at (${x}, ${y}). Color: ${this.color}, Texture: ${this.texture}`);
    }
}

// Flyweight Factory
class TreeFactory {
    private static treeTypes: Map<string, TreeType> = new Map();

    static getTreeType(name: string, color: string, texture: string): TreeType {
        let treeType = this.treeTypes.get(name);
        if (!treeType) {
            treeType = new TreeType(name, color, texture);
            this.treeTypes.set(name, treeType);
        }
        return treeType;
    }
}

// Contexto del Flyweight
class Tree {
    constructor(private x: number, private y: number, private treeType: TreeType) {}

    draw(canvas: string) {
        this.treeType.draw(canvas, this.x, this.y);
    }
}

// Uso
const canvas = "Canvas1";
const tree1 = new Tree(1, 2, TreeFactory.getTreeType("Pine", "Green", "Rough"));
const tree2 = new Tree(5, 3, TreeFactory.getTreeType("Pine", "Green", "Rough"));

tree1.draw(canvas);
tree2.draw(canvas);
