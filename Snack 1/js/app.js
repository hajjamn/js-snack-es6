/* *SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell’ospite,
posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
esempio:
{
  nomeTavolo: 'Tavolo VIP',
  nomeOspite: 'Brad Pitt',
  posto: 1
} */

//Creo gli oggetti per gli invitati

const bradPitt = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Brad Pitt`
}

const johnnyDepp = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Johnny Depp`
}

const ladyGaga = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Lady Gaga`
}

const cristianoRonaldo = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Cristiano Ronaldo`
}

const georginaRodriguez = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Georgina Rodriguez`
}

const chiaraFerragni = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Chiara Ferragni`
}

const fedez = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Fedez`
}

const georgeClooney = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `George Clooney`
}

const amalClooney = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Amal Clooney`
}

const maneskin = {
  nomeTavolo : `Tavolo VIP`,
  nomeOspite : `Maneskin`
}

//Dichiaro l'array degli invitati
const tavoloVip = [bradPitt, johnnyDepp, ladyGaga, cristianoRonaldo, georginaRodriguez, chiaraFerragni, fedez, georgeClooney, amalClooney, maneskin];

console.log(tavoloVip)