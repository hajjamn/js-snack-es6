/* SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

//Creo un array di oggetti

let bikes = [];

for (i = 0; i < 10; i++) {
  bikes[i] = {name: `bici${i + 1}`, weight: parseInt(Math.random() * 10) + 30}
};
console.log(bikes);


//Dichiaro una variabile che memorizzi l'elemento piu` piccolo trovato partendo dal valore del primo elemento dell'array
let lightestBikeFound = bikes[0]; //object

//Ciclo l'array
for (let i = 1; i < bikes.length; i++) {
  //Recupero l'elemento dell'array corrispondente all'iterazione del ciclo
  const currentElement = bikes[i];
  //Se l'elemento attuale ha un valore inferiore a quello attuamente salvato,
  //Allora sovrascrivo con il suo valore
  if (currentElement.weight < lightestBikeFound.weight) {
    lightestBikeFound = currentElement;
  }
}
// const {name, weight} = lightestBikeFound;

const name = lightestBikeFound.name;
const weight = lightestBikeFound.weight;


console.log(`La bici che pesa meno di tutte e' ${name} che pesa ${weight}`)
// console.log(`La bici che pesa meno di tutte e' ${lightestBikeFound.name} che pesa ${lightestBikeFound.weight}`)

let lightestBikeFoundForEach = bikes[0]; //object
bikes.forEach( (currentElement) => {
  if (currentElement.weight < lightestBikeFoundForEach.weight) {
    lightestBikeFoundForEach = currentElement;
  }
});

console.log(`La bici che pesa meno di tutte e' ${lightestBikeFoundForEach.name} che pesa ${lightestBikeFoundForEach.weight}`)

let lightestBikeFoundForEachNormalFunction = bikes[0]; //object
bikes.forEach( function (currentElement) {
  if (currentElement.weight < lightestBikeFoundForEachNormalFunction.weight) {
    lightestBikeFoundForEachNormalFunction = currentElement;
  }
});

console.log(`La bici che pesa meno di tutte e' ${lightestBikeFoundForEachNormalFunction.name} che pesa ${lightestBikeFoundForEachNormalFunction.weight}`)
