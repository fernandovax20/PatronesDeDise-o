//Proxy: Proporciona un sustituto o representante de otro objeto para controlar el acceso a él.

//Contexto: Proporcionar un intermediario para controlar el acceso a un objeto de base de datos sensible, por ejemplo, para añadir un control de acceso o realizar operaciones de registro.
// Servicio de base de datos
interface DatabaseService {
    query(query: string): string;
}

class RealDatabaseService implements DatabaseService {
    query(query: string): string {
        return `Resultado de la consulta '${query}'`;
    }
}

// Proxy
class DatabaseProxy implements DatabaseService {
    constructor(private realDatabaseService: RealDatabaseService) {}

    query(query: string): string {
        // Control de acceso o registro antes de ejecutar la consulta
        console.log(`Registro: Ejecutando consulta '${query}'`);
        if (query === "SELECT * FROM users") {
            throw new Error("Acceso denegado a la consulta");
        }
        return this.realDatabaseService.query(query);
    }
}

// Uso
const realDatabaseService = new RealDatabaseService();
const proxy = new DatabaseProxy(realDatabaseService);

try {
    console.log(proxy.query("SELECT * FROM products"));
    console.log(proxy.query("SELECT * FROM users")); // Esto lanzará un error
} catch (e) {
    console.error(e.message);
}
