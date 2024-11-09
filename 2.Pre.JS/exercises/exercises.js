//--------- EXERCISES -----------------------------

// 1. Imprime por consola el string 'Hello World'
console.log("1. Hello World");

//2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores
let userName = "David";
const email = "fuertes@gmail.com";

console.log(`2. Nombre: ${userName}  email: ${email}`);

// 3. Cambia ahora el valor de una de las dos variables e imprime por consola
userName = "Pepe";
console.log(`3. ${userName}`);

// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola

const numberOne = 13;
const numberTwo = 9;

console.log("4.", numberOne + numberTwo);

// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas
const textOne = "Hola";
const textTwo = "soy un string concatenado";

console.log("5.", textOne, textTwo);

// 6. Crea una función que imprima por consola el string 'Hello World'
function greeting() {
  console.log("6. Hello World");
}
greeting();

// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros
function multiplication(a, b) {
  console.log("7.", a * b);
}
multiplication(5, 6);

// 8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro

function pow(a) {
  console.log("8.", a ** 2);
}
pow(5);

// 9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
function triangleArea(a, b) {
  console.log("9.", (a * b) / 2);
}
triangleArea(4, 2);

// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.
function randomNumber(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
console.log("10.", randomNumber(1, 3));

// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.

  

function guess() {
  
  let guessNumber = randomNumber(1, 10);
  console.log(guessNumber)
  const user = prompt('Dime un número del 1 al 10')
  
  
  if (user == guessNumber) {
    console.log('Enhorabuena!!! has acertado el número')
    
  }else{
    console.log("OOOOOOOOhhhhh!!! sigue intentando");
  }

}
const button = document.querySelector("button");
button.addEventListener("click", guess);
