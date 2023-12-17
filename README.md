# Patrones de Diseño en Programación
## Patrones Creacionales
### Singleton
Asegura que una clase solo tenga una instancia y proporciona un punto de acceso global a ella.

Ejemplo: Utilizado en la configuración de una base de datos para garantizar que solo exista una conexión a la base de datos en toda la aplicación.

### Factory Method
Define una interfaz para crear un objeto, pero permite que las subclases alteren el tipo de objetos que se crearán.

Ejemplo: Aplicado en un sistema de notificaciones, donde se pueden crear diferentes tipos de notificaciones (correo electrónico, SMS) según la entrada del usuario.

### Abstract Factory
Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

Ejemplo: Usado en la creación de componentes de una interfaz de usuario que deben coincidir con un tema específico (oscuro, claro), como botones y barras de navegación.

### Builder
Permite la construcción de un objeto complejo paso a paso.

Ejemplo: Ideal para construir objetos de configuración para una solicitud HTTP, donde se configuran diferentes aspectos como el método, URL, encabezados y cuerpo de la solicitud.

### Prototype
Permite copiar objetos existentes sin hacer que el código dependa de sus clases.

Ejemplo: Útil en un sistema de gráficos donde se necesitan duplicar objetos de configuración con pequeñas variaciones.

## Patrones Estructurales

### Adapter (Wrapper)
Permite la colaboración entre interfaces incompatibles.

Ejemplo: Integrar una biblioteca de análisis de datos con una interfaz diferente a la que nuestra aplicación espera, adaptando la interfaz de la biblioteca a la que nuestra aplicación puede utilizar.

### Bridge
Separa una abstracción de su implementación para que ambas puedan variar independientemente.

Ejemplo: Utilizado en un sistema de renderización de UI, permitiendo que diferentes plataformas (HTML, Canvas) puedan renderizar distintos elementos de UI (círculos, cuadrados).

### Composite
Permite componer objetos en estructuras de árboles para representar jerarquías de parte-todo.

Ejemplo: Representar y trabajar con una estructura gráfica, donde cada elemento puede ser un compuesto de otros elementos o un elemento individual.

### Decorator
Añade nuevas funcionalidades a un objeto de forma dinámica.

Ejemplo: Añadir características adicionales a un objeto de café, como leche o crema batida, sin alterar la estructura de la clase café.

### Facade
Proporciona una interfaz simplificada a un conjunto de interfaces en un subsistema.

Ejemplo: Simplificar la interacción con un sistema complejo de renderizado de gráficos, proporcionando una interfaz unificada para dibujar diferentes tipos de objetos.

### Flyweight
Reduce el costo de creación y manipulación de un gran número de objetos similares.

Ejemplo: Optimizar el uso de la memoria en una aplicación que dibuja muchos árboles en un bosque, donde cada árbol comparte estados comunes como color y textura.

### Proxy
Proporciona un sustituto o representante de otro objeto para controlar el acceso a él.

Ejemplo: Controlar el acceso a un objeto de base de datos sensible, realizando operaciones adicionales como control de acceso o registro.

## Patrones de Comportamiento

### Chain of Responsibility
Permite pasar solicitudes a lo largo de una cadena de manejadores.

Ejemplo: Procesar mensajes de log con diferentes niveles de severidad (INFO, DEBUG, ERROR), donde cada nivel de severidad es manejado por un manejador diferente.

### Command
Convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud.

Ejemplo: Implementar un sistema de comandos para realizar operaciones en un editor de texto, como copiar y pegar texto.

### Interpreter
Define una representación gramatical para un lenguaje y un intérprete que usa esa representación para interpretar oraciones en el lenguaje.

Ejemplo: Interpretar expresiones matemáticas simples como "5 + 3".

### Iterator
Proporciona una forma de acceder a los elementos de un objeto agregado sin exponer su representación subyacente.

Ejemplo: Navegar a través de una colección de perfiles de usuario de una red social.

### Mediator
Reduce el acoplamiento entre clases al ser la única clase que tiene información detallada sobre sus métodos y mantiene el seguimiento de cómo están interconectadas y cómo interactúan.

Ejemplo: Coordinar la comunicación entre diferentes componentes en una aplicación de chat.

### Memento
Permite guardar y restaurar el estado previo de un objeto sin revelar los detalles de su implementación.

Ejemplo: Permitir guardar y restaurar el estado anterior de un editor de texto.

### Observer
Define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno cambia su estado, notifica este cambio a todos sus dependientes.

Ejemplo: Implementar un sistema de notificaciones donde los suscriptores son notificados cuando un evento ocurre en el sistema.

### State
Permite a un objeto alterar su comportamiento cuando su estado interno cambia.

Ejemplo: Implementar un reproductor de música que cambie su comportamiento según el estado en el que se encuentre (reproduciendo, pausado, detenido).

### Strategy
Permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables.

Ejemplo: Implementar un sistema de cálculo de rutas que puede utilizar diferentes algoritmos de navegación (por carretera, a pie, en bicicleta).

### Template Method
Define el esqueleto de un algoritmo en una operación, posponiendo algunos pasos a las subclases.

Ejemplo: Implementar un marco para un proceso de construcción de casas, donde ciertos pasos son iguales y otros son específicos para cada tipo de casa.

### Visitor
Permite separar algoritmos de los objetos sobre los cuales operan.

Ejemplo: Implementar un sistema de reportes para diferentes tipos de elementos de una estructura empresarial (Empleado, Departamento) sin alterar sus clases.