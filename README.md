# Curso de Asincronismo con JavaScript

El cuso se enfoca en las principales estructuras que maneja JavaScript para trabajar el asincronismo:

- Callbacks
- Promesas
- Async/Await

Esto se pone en práctica mediante el llamado a una API pública para obtener determinados requisitos en específico.

## 1. Aasincronismo en JavaScript

Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos (event loop) implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).

Cada operación se ejecuta y devuelve inmediatamente el control al hilo, evitando el bloqueo. Cuando cada operación termina se envia una notificación de que ha terminado, es entonces cuando la respuesta se coloca en cola para ser procesada.

## 2. Desarrollar soluciones utilizando asicronismo

### 2.1 Definición Estructura Callback

Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior.

Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback.

Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad e incorporar el asincronismo.

- ### 2.2 Peticiones a APIs usando Callbacks

- ### 2.3 Múltiples Peticiones a un API con Callbacks

Se puede observar en los archivos del repositorio todo el script utilizado para realizar las llamadas a la API de forma asincrona con callbacks con los comentarios pertinentes para explicar todo el proceso.

### 2.4 Implementando Promesas

Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.

Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.

- #### Promise

El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

- ### 2.5 Resolver problema con Promesas

Se puede observar en los archivos del repositorio todo el script utilizado para realizar las llamadas a la API de forma asincrona con promesas con los comentarios pertinentes para explicar todo el proceso.

### 2.6 Conociendo Async/await

- Función async

La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.

- await

El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.

- ### 2.7 Resolver problema con Async/Await

Se puede observar en los archivos del repositorio todo el script utilizado para realizar las llamadas a la API de forma asincrona con async/await con los comentarios pertinentes para explicar todo el proceso.

## 3. Comprender las diferencias entre las estructuras asíncronas

- ### 3.1 Callbacks Vs Promesas Vs Async/Await

- ### 3.2 Conclusiones

#### Ventajas y desventajas de los tres métodos:

- Callbacks:

  - Ventajas:

    - Son simples de utilizar, funcionan en todos los navegadores.

  - Desventajas:

    - Composicion tosca al anidar elementos llegando al callback hell.
    - Dificil de leer.
    - Crea un flujo de trabajo poco intuitivo.
    - El manejo de errores es tedioso.

- Promesas:

  - Ventajas:

    - Facilmente enlazable para realizar varias llamadas con los then.
    - Facil de leer.
    - Tiene una gran capacidad de trabajo con asincronismo.

  - Desventajas:

    - No maneja excepciones, solo captura el error con un catch final.
    - Propenso a errores si no se retorna la nueva llamada luego del then.
    - Necesita un polifile para funcionar en todos los navegadores, se tiene que transfilar el codigo con una herrameinta como Babel.

- Async/await:

  - Ventajas:

    - Se trabaja fluidamente y se capturan las excepciones con try/catch.
    - Son faciles de leer y comprender.
    - El await es muy intuitivo y el entendimiento del script resulta mas fácil.

  - Desventajas:

    - Si se necesitan realizar muchos llamados, se debe esperar las respuestas de los llamados previos para obtener una respuesta.
    - Necesita un polifile para funcionar en todos los navegadores, se tiene que transfilar el codigo con una herrameinta como Babel.
