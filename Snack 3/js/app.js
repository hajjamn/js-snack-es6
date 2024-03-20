/* SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

//Creo un array di oggetti

let bikes = [];

for (i = 0; i < 10; i++) {
  bikes[i] = {name: `bici${i + 1}`, weight: parseInt(i * Math.random() * 10) + 30}
};
console.log(bikes)

//Creo un array per i pesi delle biciclette

let bikesWeights = [];

//
bikes.forEach()