/* SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

//Creo la funzione per generare i numeri casuali
  //Dichiaro quanti punti si ottengono vincendo una partita
const winScore = 3;

  //Scrivo una funzione che mi dia il punteggio che si ottiene vincendo le partite cogtro ogni avversario sia in andata che in ritorno
function generateRandomScore() {
  let max = (teamsNames.length - 1) * winScore * 2;
  let min = 0;
  return parseInt(Math.random() * (max - min) + min)
}

  //Assumiamo che il numero di falli massimo ottenibile sia 15 a partita e generiamo il numero
function generateRandomFouls() {
  let max = (teamsNames.length - 1) * 15;
  let min = 0;
  return parseInt(Math.random() * (max - min) + min)
}

//Genero un array di stringhe con i nomi delle squadre che voglio generare
const teamsNames = ['Inter', 'Milan', 'Juventus', 'Bologna', 'Roma', 'Atalanta', 'Napoli', 'Fiorentina', 'Lazio', 'Monza', 'Torino', 'Genoa', 'Lecce', 'Udinese', 'Verona', 'Cagliari', 'Empoli', 'Frosinone', 'Sassuolo', 'Salernitana']

//Creo l'array vuoto da popolare
let teams = [];

//Ciclo l'array per generare oggetti e pusharli in un array
//Accedo ad un elemento dell'array
teamsNames.forEach( (currentElement) => {
  //Creo un oggetto che abbia come nome dell'oggetto la stringa dell'array e come valore della proprieta' name quella stessa stringa, poi genero gli altri valori con le funzioni
  const teamObject = {
    name: currentElement,
    score: 0,
    fouls: 0
    }
    //Pusho l'oggetto creato nell'array di oggetti
  teams.push(teamObject);
});
console.log(teams) //Non capisco come mai non mi dia questo console log a meno che io commenti il secondo

//Ciclo il nuovo array per generare casualmente i punteggi

teams.forEach( (currentElement) => {
  currentElement.score = generateRandomScore();
  currentElement.fouls = generateRandomFouls();
})
console.log(teams)

/* for (let i = 0; i < teams.length; i++) {
  teams[i].score = generateRandomScore();
  teams[i].fouls = generateRandomFouls();
}
console.log(teams) */ //Non funziona nemmeno questo

//Creo un array con solo le due proprieta' ciclando il precedente
let teamsOnlyNamesAndFouls = [];

teams.forEach( (currentElement) => {
  const {name, fouls} = currentElement;
  const currentElementOnlyNamesAndFouls = {
    name,
    fouls
  }
  teamsOnlyNamesAndFouls.push(currentElementOnlyNamesAndFouls);
});
console.log(teamsOnlyNamesAndFouls)

//Stampare in pagina oltre che in console
//Dichiaro il container dove inserire il contenuto generato
const containerDomElement = document.querySelector(`.container`);

//Genero la tabella dove inserire le varie righe
const tableElement = document.createElement(`table`);
tableElement.className = `table table-striped text-center w-auto mx-auto mt-5`

//Genero la riga degli header e la appendo alla tabella generata prima
const tableHeader = document.createElement('thead');
tableHeader.innerHTML = `
  <tr>
    <th scope="col" class="px-3">Posizione</th>
    <th scope="col" class="px-3">Squadra</th>
    <th scope="col" class="px-3">Punti</th>
    <th scope="col" class="px-3">Falli</th>
  </tr>
`;
tableElement.append(tableHeader);

//Metto in ordine l'array per punteggio
teams.sort( (a, b) => b.score - a.score);

//Creo l'elemento tbody
const tableBody = document.createElement('tbody')

//Ciclo l'array di oggetti e riempio la tabella
teams.forEach( (currentElement, i) => {
  const currentElementRow = document.createElement(`tr`);
  currentElementRow.innerHTML = `
    <th scope="row">${i +1}</td>
    <td>${currentElement.name}</td>
    <td>${currentElement.score}</td>
    <td>${currentElement.fouls}</td>
  `;
  tableBody.append(currentElementRow);
});

tableElement.append(tableBody);

//Appendo la tabella al container
containerDomElement.append(tableElement)