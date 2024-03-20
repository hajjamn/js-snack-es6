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
  let max = (teams.number - 1) * winScore * 2;
  let min = 0;
  return parseInt(Math.random() * (max - min) + min)
}

  //Assumiamo che il numero di falli massimo ottenibile sia 15 a partita e generiamo il numero
function generateRandomFouls() {
  let max = (teams.number - 1) * 15;
  let min = 0;
  return parseInt(Math.random() * (max - min) + min)
}

//Genero un array di stringhe con i nomi delle squadre che voglio generare
const teamsNames = ['Inter', 'Milan', 'Juventus', 'Bologna', 'Roma', 'Atalanta', 'Napoli', 'Fiorentina', 'Lazio', 'Monza', 'Torino', 'Genoa', 'Lecce', 'Udinese', 'Verona', 'Cagliari', 'Empoli', 'Frosinone', 'Sassuolo', 'Salernitana']
console.log(teamsNames)