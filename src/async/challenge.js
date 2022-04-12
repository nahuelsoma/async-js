// Se trae la funcion fetchData que es la encargada de realizar la peticion a la api mediante una promesa.

const fetchData = require("../utils/fetchData");

// Se define la URL de la api en una constante en mayusculas. Esto es debido a una convencion que se utiliza para identificar variables que nunca se van a mover, pudiendolas asi identificar facilmente.

const API = "https://rickandmortyapi.com/api/character/";

// Se crea una funcion asincrona para realizar las tres llamadas a la API.

const anotherFunction = async (url_api) => {
  // Se utiliza la dupla try/catch para capturar los posibles errores.

  try {
    // Se realiza el primer pedido y se espera la respuesta de la api (await) con el valor de la cantidad de personajes registrados en la misma.

    const data = await fetchData(url_api);

    // Se realiza el segundo pedido y se espera la respuesta de la api (await) con la informacion del primer personaje registrado.
    const character = await fetchData(`${API}${data.results[0].id}`);

    // Se realiza el tercer pedido y se espera la respuesta de la api (await) con los datos de la dimension del planeta del personaje llamado anteriormente.

    const origin = await fetchData(character.origin.url);

    // Finalmente se presenta en pantalla la informacion recibida de la api.

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    // En caso de que exista un error, se captura mediante catch.

    console.error(error);
  }
};

// Para verificar la asincronia, se presenta en pantalla la palabra "Before", luego se invoca a la funcion asincrona y finalmente se presenta la palabra "After".

console.log("Before");
anotherFunction(API);
console.log("After");

// Se verifica el asincronismo de la funcion "anotherFunction" ya que se presenta en consola la palabra "Before", luego "After" y finalmente el resultado de la llamada a la API.

// Se crea un script en packaje.json con el nombre "async:challenge" para poder correr el programa con node.
