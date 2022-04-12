// Se instala la dependencia "xmlhttprequest" para hacer peticiones a la API. No se realiza mediante Fetch (ya que utiliza promesas) para poder comprender como funciona el asincronismo con callbacks.

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Mediante fetchData se realiza el pedido a la API. SE utilizan arrow functions ya que se encuentran disponibles desde ES6.

const fetchData = (url_api) => {
  // Se crea la nueva promesa con dos posibles resultados, resolve y reject.

  return new Promise((resolve, reject) => {
    // Se crea una nueva instancia de XMLHttpRequest.

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        // Se utiliza un if ternario para verificar si la respuesta 200 del servidor

        xhttp.status === 200
          ? // Si se resuelve de manera positiva, se recibe el valor en formato de texto y se parsea en formato JSON.

            resolve(JSON.parse(xhttp.responseText))
          : // En el caso de que se resuelva negativo, se crea un nuevo error.

            reject(new Error("Error", url_api));
      }
    };

    // Finalmente, se crea el valor de la peticion.

    xhttp.send();
  });
};

module.exports = fetchData;
