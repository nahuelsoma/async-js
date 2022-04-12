const doSomethingAsync = () => {
  // Se crea una nueva promesa.

  return new Promise((resolve, reject) => {
    // Con un if ternario verificamos si se cumple la condicion.

    true
      ? // En el caso de que se resuelva positivo, se retorna el valor "Do something async" con un delay de 2000 ms.

        setTimeout(() => resolve("Do something async"), 2000)
      : // En el caso de resolverse de forma negativa, se crea un nuevo error.

        reject(new Error("Error"));
  });
};

// Se crea una funcion asincrona la cual llama a nuestra funcion promesa.

const doSomething = async () => {
  // Se espera el resultado de la funcion "doSomethingAsync" de manera asincrona.

  const something = await doSomethingAsync();

  // Luego de resolverse, se presenta en consola.

  console.log(something);
};

// Para verificar si el resultado se presenta de manera asincrona, se presenta en consola la palabra "Before", luego se llama a la funcion asincrona, y finalmente se presenta en consola la palabra "After".

console.log("Before");
doSomething();
console.log("After");

// Al correr el script se verifica que la funcion asincrona se resuleve luego de los llamados de "Before" y "After".

// Se crea una nueva funcion con la capacidad adicional de capturar el posible error en la funcion asincrona. Para ello se utiliza la dupla de try/catch.

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    // En el caso de que se resuelva de manera erronea la funcion, se captura el error y se presenta en consola.

    console.log(error);
  }
};

// Para verificar si el resultado se presenta de manera asincrona, se presenta en consola la palabra "Before 1", luego se llama a la funcion asincrona, y finalmente se presenta en consola la palabra "After 1".

console.log("Before 1");
anotherFunction();
console.log("After 1");

// Al correr el script se verifica que ambas funciones asincronas se resuleven luego de los llamados de "Before", "After", "Before 1" y "After 1".

// Se crea un script "async" en packaje.json para correr el programa en node.
