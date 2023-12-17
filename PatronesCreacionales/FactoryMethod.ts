/** 
Factory Method: Define una interfaz para crear un objeto, pero permite que las subclases alteren el tipo de objetos que se crearán.

Contexto: Crear diferentes tipos de notificaciones (correo electrónico, SMS, etc.) basadas en una entrada.
*/
// notification.ts
interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(message: string) {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotification implements Notification {
    send(message: string) {
        console.log(`Sending SMS: ${message}`);
    }
}

class NotificationFactory {
    static createNotification(type: string): Notification {
        if (type === "email") {
            return new EmailNotification();
        } else if (type === "sms") {
            return new SMSNotification();
        } else {
            throw new Error("Notification type not supported.");
        }
    }
}

// Uso
const notification = NotificationFactory.createNotification("email");
notification.send("Hello World!");
