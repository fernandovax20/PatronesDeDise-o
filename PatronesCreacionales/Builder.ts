//Builder: Permite la construcción de un objeto complejo paso a paso.

//Contexto: Construir objetos de configuración de una solicitud HTTP con múltiples opciones (método, URL, headers, cuerpo, etc.) de manera fluida y legible.// http-request-builder.ts
class HttpRequest {
    method: string;
    url: string;
    headers: Record<string, string>;
    body: string;

    constructor() {
        this.method = "";
        this.url = "";
        this.headers = {};
        this.body = "";
    }
}

class HttpRequestBuilder {
    private request: HttpRequest;

    constructor() {
        this.request = new HttpRequest();
    }

    setMethod(method: string): HttpRequestBuilder {
        this.request.method = method;
        return this;
    }

    setURL(url: string): HttpRequestBuilder {
        this.request.url = url;
        return this;
    }

    setHeader(key: string, value: string): HttpRequestBuilder {
        this.request.headers[key] = value;
        return this;
    }

    setBody(body: string): HttpRequestBuilder {
        this.request.body = body;
        return this;
    }

    build(): HttpRequest {
        return this.request;
    }
}

// Uso
const httpRequest = new HttpRequestBuilder()
    .setMethod("POST")
    .setURL("https://api.example.com")
    .setHeader("Content-Type", "application/json")
    .setBody(JSON.stringify({ key: "value" }))
    .build();

console.log(httpRequest);
