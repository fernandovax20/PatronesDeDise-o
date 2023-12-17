//Prototype: Permite copiar objetos existentes sin hacer que el código dependa de sus clases.

//Contexto: Clonar objetos de configuración de gráficos en un dashboard para crear nuevos gráficos con configuraciones similares.
// chart-config.ts
class ChartConfig {
    type: string;
    data: Record<string, any>;

    constructor(type: string, data: Record<string, any>) {
        this.type = type;
        this.data = data;
    }

    clone(): ChartConfig {
        return new ChartConfig(this.type, { ...this.data });
    }
}

// Uso
const originalConfig = new ChartConfig("bar", { labels: ["A", "B", "C"], values: [1, 2, 3] });
const clonedConfig = originalConfig.clone();
clonedConfig.data = { ...clonedConfig.data, values: [4, 5, 6] };

console.log(originalConfig);
console.log(clonedConfig);
