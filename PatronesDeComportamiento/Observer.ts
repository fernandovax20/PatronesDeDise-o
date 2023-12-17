//Contexto: Implementar un sistema de notificaciones donde los suscriptores son notificados cuando un evento ocurre en el sistema.
// Observer Interface
interface Observer {
    update(message: string): void;
}
//Observer: Define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno cambia su estado, notifica este cambio a todos sus dependientes.

// Subject Interface
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

// Concrete Subject
class EventManager implements Subject {
    private observers: Observer[] = [];
    private message: string = '';

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this.message);
        }
    }

    public createEvent(message: string): void {
        this.message = message;
        this.notify();
    }
}

// Concrete Observer
class User implements Observer {
    constructor(private name: string) {}

    public update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

// Uso
const eventManager = new EventManager();
const alice = new User("Alice");
const bob = new User("Bob");

eventManager.attach(alice);
eventManager.attach(bob);

eventManager.createEvent("New event happened!");
