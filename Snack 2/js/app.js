/* *SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id   Name                    Grades
213  Marco della Rovere      78
110  Paola Cortellessa       96
250  Andrea Mantegna 	      48
145  Gaia Borromini          74
196  Luigi Grimaldello 	  68
102  Piero della Francesca   50
120  Francesca da Polenta    84 */

//Creo gli oggetti degli studenti

const marcoDellaRovere = {
  studentId : `213`,
  studentName : `Marco della Rovere`,
  studentGrades: `78`
};

const paolaCortellessa = {
  studentId : `110`,
  studentName : `Paola Cortellessa`,
  studentGrades: `96`
};

const andreaMantegna = {
  studentId : `250`,
  studentName : `Andrea Mantegna`,
  studentGrades: `48`
};

const gaiaBorromini = {
  studentId : `145`,
  studentName : `Gaia Borromini`,
  studentGrades: `74`
};

const luigiGrimaldello = {
  studentId : `196`,
  studentName : `Luigi Grimaldello`,
  studentGrades: `68`
};

const pieroDellaFrancesca = {
  studentId : `102`,
  studentName : `Piero della Francesca`,
  studentGrades: `50`
};

const francescaDaPolenta = {
  studentId : `120`,
  studentName : `Francesca da Polenta`,
  studentGrades: `84`
};

//Creo l'array di studenti

const students = [marcoDellaRovere, paolaCortellessa, andreaMantegna, gaiaBorromini, luigiGrimaldello, pieroDellaFrancesca, francescaDaPolenta];

//Creo la lista con i nomi in maiuscolo

/* students.forEach((student) => {
  console.log(student.studentName.toUpperCase())
}); */

students.map((el, i) => el.studentName = el.studentName.toUpperCase());

//Creo la lista di tutti gli studenti con voti sopra il 70

console.log(`_____ Students with grades over 70_______`)

const studedntsOver70 = students.filter((student) => student.studentGrades > 70);
studedntsOver70.forEach((student) => console.log(student.studentName));

//Creo la lista di tutti gli studenti con voti sopra il 70 e id sopra 120

console.log(`_____ Students with grades over 70 and id over 120_______`)

const studedntsOver70AndIdOver120 = students.filter((student) => student.studentGrades > 70 && student.studentId > 120);
studedntsOver70AndIdOver120.forEach((student) => console.log(student.studentName));