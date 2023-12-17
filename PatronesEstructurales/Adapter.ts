//Adapter (o Wrapper): Permite la colaboración entre interfaces incompatibles.

//Contexto: Integrar una biblioteca de análisis de datos que tiene una interfaz diferente a la que nuestra aplicación espera.
// DataAnalyzer de terceros
class ThirdPartyDataAnalyzer {
    analyzeDataInSpecificFormat(data: string): string {
        // Procesamiento complejo
        return `Analyzed data: ${data}`;
    }
}

// Interfaz esperada por nuestra aplicación
interface IDataAnalyzer {
    analyze(data: string): string;
}

// Adapter
class DataAnalyzerAdapter implements IDataAnalyzer {
    private thirdPartyAnalyzer: ThirdPartyDataAnalyzer;

    constructor(thirdPartyAnalyzer: ThirdPartyDataAnalyzer) {
        this.thirdPartyAnalyzer = thirdPartyAnalyzer;
    }

    analyze(data: string): string {
        return this.thirdPartyAnalyzer.analyzeDataInSpecificFormat(data);
    }
}

// Uso
const thirdPartyAnalyzer = new ThirdPartyDataAnalyzer();
const adaptedAnalyzer = new DataAnalyzerAdapter(thirdPartyAnalyzer);

console.log(adaptedAnalyzer.analyze("example data"));
