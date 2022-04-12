// Traemos la funcion fetchData.

const fetchData = require("../utils/fetchData");

// Declaramos la variable API con la URL destino.

const API = "https://rickandmortyapi.com/api/character/";

// Se realiza el primer pedido a la url API.

fetchData(API)
  .then((data) => {
    // Luego que se resuelve el primer llamado, se presenta la info en consola.

    console.log(data.info.count);

    // Se hace el return de una segunda peticion.

    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    // Luego que se resuelve la segunda peticion, se presenta en consola.

    console.log(data.name);

    // Se hace el return de una tercera peticion.

    return fetchData(data.origin.url);
  })
  .then((data) => {
    // Luego que se resuelve la tercera peticion, se presenta en consola.

    console.log(data.dimension);
  })

  // Finalmente se capturan los errores.

  .catch((err) => console.error(err));

// Se crea en package.json el script "promise.challenge" para correrlo en node.
