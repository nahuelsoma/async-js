// Se instala la dependencia "xmlhttprequest" para hacer peticiones a la API. No se realiza mediante Fetch (ya que utiliza promesas) para poder comprender como funciona el asincronismo con callbacks.

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

// Llamados a la API

fetchData(API, function (error1, data1) {
  // Dentro del callback, lo primero que se resuelve es el posible error

  if (error1) return console.error(error1);

  // Se pide la data del primer personaje de la API

  fetchData(API + data1.results[0].id, function (error2, data2) {
    // Se comienza a realizar la segunda peticion a la API, pero antes se resuelve el posible error

    if (error2) return console.error(error2);

    // Se realiza la segunda peticion para saber la url destino de la API

    fetchData(data2.origin.url, function (error3, data3) {
      // Se comienza a realizar la tercera peticion a la API, pero antes se resuelve el posible error

      if (error3) return console.error(error3);

      // Se realiza la tercera peticion a la API y se presenta toda la info en consola

      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});

// Cuando se comienzan a anidar if dentro de if se lo denomina callback hell, ya que se realizan multiples peticiones anidadas lo que resulta una mala practica. Como máximo se deberian realizar 3 peticiones y cortar

// Se crea un script en el package.json con el nombre de "callback:challenge" para poder correr el script en node
