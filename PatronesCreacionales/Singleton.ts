/* 
Singleton: Asegura que una clase solo tenga una instancia y proporciona un punto de acceso global a ella.

Contexto: Queremos asegurarnos de que solo exista una instancia de una clase de configuración de base de datos en toda la aplicación.
*/
// database-config.ts
class DatabaseConfig {
    private static instance: DatabaseConfig;
    public connectionString: string;

    private constructor() {
        this.connectionString = "Server=myServerAddress;Database=myDataBase;";
    }

    public static getInstance(): DatabaseConfig {
        if (!DatabaseConfig.instance) {
            DatabaseConfig.instance = new DatabaseConfig();
        }
        return DatabaseConfig.instance;
    }
}

// Uso
const config = DatabaseConfig.getInstance();
console.log(config.connectionString);
