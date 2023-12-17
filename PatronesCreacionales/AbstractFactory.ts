//Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

//Contexto: Crear diferentes temas para una aplicación web, donde cada tema tiene su propia representación de elementos de la UI como botones y barras de navegación.
// ui-elements.ts
interface Button {
    render(): string;
}

interface NavBar {
    render(): string;
}

class LightButton implements Button {
    render() {
        return "Light Button";
    }
}

class DarkButton implements Button {
    render() {
        return "Dark Button";
    }
}

class LightNavBar implements NavBar {
    render() {
        return "Light Navigation Bar";
    }
}

class DarkNavBar implements NavBar {
    render() {
        return "Dark Navigation Bar";
    }
}

// ui-factory.ts
interface UIFactory {
    createButton(): Button;
    createNavBar(): NavBar;
}

class LightThemeFactory implements UIFactory {
    createButton() {
        return new LightButton();
    }

    createNavBar() {
        return new LightNavBar();
    }
}

class DarkThemeFactory implements UIFactory {
    createButton() {
        return new DarkButton();
    }

    createNavBar() {
        return new DarkNavBar();
    }
}

// Uso
const lightFactory: UIFactory = new LightThemeFactory();
console.log(lightFactory.createButton().render());
console.log(lightFactory.createNavBar().render());

const darkFactory: UIFactory = new DarkThemeFactory();
console.log(darkFactory.createButton().render());
console.log(darkFactory.createNavBar().render());
