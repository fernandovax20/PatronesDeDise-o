//Chain of Responsibility: Permite pasar solicitudes a lo largo de una cadena de manejadores.

//Contexto: Procesar mensajes de log con diferentes niveles de severidad (INFO, DEBUG, ERROR) utilizando distintos manejadores.
// Handler Interface
interface Logger {
    setNext(logger: Logger): Logger;
    log(message: string, level: string): void;
}

// Base Handler
abstract class AbstractLogger implements Logger {
    private nextLogger: Logger | null = null;

    public setNext(logger: Logger): Logger {
        this.nextLogger = logger;
        return logger;
    }

    public log(message: string, level: string): void {
        if (this.nextLogger != null) {
            this.nextLogger.log(message, level);
        }
    }

    protected abstract write(message: string): void;
}

// Concrete Handlers
class InfoLogger extends AbstractLogger {
    protected write(message: string): void {
        console.log(`INFO: ${message}`);
    }
}

class DebugLogger extends AbstractLogger {
    protected write(message: string): void {
        console.log(`DEBUG: ${message}`);
    }
}

class ErrorLogger extends AbstractLogger {
    protected write(message: string): void {
        console.log(`ERROR: ${message}`);
    }
}

// Uso
const loggerChain = new InfoLogger();
loggerChain.setNext(new DebugLogger()).setNext(new ErrorLogger());

loggerChain.log("This is an information.", "INFO");
loggerChain.log("This is a debug level information.", "DEBUG");
loggerChain.log("This is an error information.", "ERROR");
