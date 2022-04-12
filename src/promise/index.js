// De aqui en adelante se utiliza ES6.

const somethingWillHappen = () => {
  // Dentro de la promesa se puede resolver o rechazar.

  return new Promise((resolve, reject) => {
    // La validacion se utiliza para decidir si la promesa se resuelve o se rechaza. En caso de que el if sea verdadero, se resuelva; en caso contrario se rechazará.

    if (true) {
      resolve("Hey!");
    } else {
      reject("Whooops!");
    }
  });
};

// Se ejecuta la funcion.

somethingWillHappen()
  // En caso de que la promesa se resuelva de manera positiva, se presentará en pantalla.

  .then((response) => console.log(response))

  // En caso de que no se resuelva, se captura el error con catch

  .catch((err) => console.error(err));

// Se crea un script en el package.json con el nombre de "promise" para poder correr el script en node

// Se crea una segunda funcion

const somethingWillHappen2 = () => {
  // En este return hay que asegurar que el Promise se escribe con P mayuscula ya que es una palabra reservada de JS para este fin.

  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Hey! True");

        // Si se cumple con la condicion, se resuelve la promesa con un setTimeout.
      }, 2000);
    } else {
      const error = new Error("Whooops! Another error");
      reject(error);

      // En caso de que no se cumpla la promesa, se rechaza y se muestra el error correspondiente.
    }
  });
};

// Se llama a la segunda funcion con la promesa.

somethingWillHappen2()
  // Si se resuelve de manera positiva, se pueden invovar acciones mediante el then. Tantos como sea necesario.

  .then((response) => console.log(response))

  // En caso que se rechace, se captura el error con catch.

  .catch((err) => console.error(err));

// Corremos nuevamente el script con node y se observa el asincronismo al presentarse el resultado de la segunda funcion con un delay de 2000 milisegundos.

// Si hacemos fallar la promesa, se reporta todo el error para hacer un debugging correcto.

// Tambien se pueden correr varias promesas juntas de la siguiente forma:

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });

// En este ultimo caso, la respuesta del Array con los dos valores se devuelve luego del delay de 2000 segundos de la segunda promesa.
