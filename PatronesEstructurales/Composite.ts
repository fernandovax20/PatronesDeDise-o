//Composite: Permite componer objetos en estructuras de árboles para representar jerarquías de parte-todo.

//Contexto: Representar una estructura jerárquica de elementos gráficos, donde cada elemento puede ser un compuesto de otros elementos o un elemento individual.
interface Graphic {
  render(): void;
}

class Circle implements Graphic {
  render(): void {
      console.log("Rendering a circle");
  }
}

class CompositeGraphic implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic): void {
      this.children.push(child);
  }

  render(): void {
      console.log("Composite Graphic:");
      this.children.forEach(child => child.render());
  }
}

// Uso
const circle1 = new Circle();
const circle2 = new Circle();
const composite = new CompositeGraphic();

composite.add(circle1);
composite.add(circle2);

composite.render();
