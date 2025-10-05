// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const bikes = [
  { nome: "bici1", peso: 7.1 },
  { nome: "bici2", peso: 7.9 },
  { nome: "bici3", peso: 6.8 },
  { nome: "bici4", peso: 7.0 },
  { nome: "bici5", peso: 6.9 },
  { nome: "bici6", peso: 7.2 },
  { nome: "bici7", peso: 7.4 },
  { nome: "bici8", peso: 7.6 },
  { nome: "bici9", peso: 5.9 },
  { nome: "bici10", peso: 8.0 },
];

let lessWeightBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
  const curBike = bikes[i];
  if (curBike.peso < lessWeightBike.peso) {
    lessWeightBike = curBike;
  }
}
console.log(bikes);
console.log(
  "la bici che pesa di meno è:",
  lessWeightBike.nome,
  "e pesa:",
  lessWeightBike.peso,
  "kg"
);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
  { nome: "Squadra1", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra2", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra3", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra4", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra5", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra6", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra7", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra8", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra9", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra10", puntiFatti: 0, falliSubiti: 0 },
];

const teamsFouls = [];
for (let i = 0; i < teams.length; i++) {
  const curTeam = teams[i];
  curTeam.puntiFatti = generateRandomNumber(1, 50);
  curTeam.falliSubiti = generateRandomNumber(1, 20);
  teamsFouls.push({ nome: curTeam.nome, falliSubiti: curTeam.falliSubiti });
}

console.log(teams);
console.log(teamsFouls);

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function valuesBetween(array, index1, index2) {
  const arrayValuesBetween = [];
  for (let i = 0; i < array.length; i++) {
    const curValue = array[i];
    if (i > index1 && i < index2) {
      arrayValuesBetween.push(curValue);
    }
  }
  return arrayValuesBetween;
}

console.log(valuesBetween(numbers, 2, 6));

//funzione con .slice
function valuesBetween2(array, index1, index2) {
  return array.slice(index1 + 1, index2);
}

console.log(valuesBetween2(numbers, 2, 6));

//funzione senza .push
function valuesBetween3(array, index1, index2) {
  const arrayValuesBetween = [];
  for (let i = 0; i < array.length; i++) {
    const curValue = array[i];
    if (i > index1 && i < index2) {
      arrayValuesBetween[arrayValuesBetween.length] = curValue;
    }
  }
  return arrayValuesBetween;
}

console.log(valuesBetween3(numbers, 2, 6));

// Snack 4 (Bonus)

// Scrivi una funzione che fonda due array
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3,4,5] → [a,1,b,2,c,3,4,5].

const nums = [1, 2, 3, 4, 5];
const letters = ["a", "b", "c"];

function arrayJoiner(array1, array2) {
  const mergedArray = [];
  const maxLength = Math.max(array1.length, array2.length);
  for (let i = 0; i < maxLength; i++) {
    if (array1.length > i) {
      mergedArray.push(array1[i]);
    }
    if (array2.length > i) {
      mergedArray.push(array2[i]);
    }
  }
  return mergedArray;
}

console.log(arrayJoiner(nums, letters));

// Snack 5 (creato da solo)

// Crea un array di oggetti che rappresentano studenti.
// Ogni studente ha queste proprietà:

// nome (stringa)

// voti (array di numeri da 1 a 10)

// Popola l’array con almeno 5 studenti, ognuno con almeno 3 voti.

// Scrivi una funzione che calcoli la media dei voti per ogni studente.

// Restituisci un nuovo array di oggetti con solo il nome e la media dei voti.

// Stampa il risultato in console.

const students = [
  { nome: "Studente1", voti: [0, 0, 0] },
  { nome: "Studente2", voti: [0, 0, 0] },
  { nome: "Studente3", voti: [0, 0, 0] },
  { nome: "Studente4", voti: [0, 0, 0] },
  { nome: "Studente5", voti: [0, 0, 0] },
];

const averagePointsStudent = [];

for (let i = 0; i < students.length; i++) {
  const curStudent = students[i];
  for (let k = 0; k < curStudent.voti.length; k++) {
    curStudent.voti[k] = generateRandomNumber(1, 10);
  }
  const average = gradePointAverage(curStudent.voti);
  averagePointsStudent.push({
    nome: curStudent.nome,
    mediaVoti: parseFloat(average.toFixed(1)),
  });
}

console.log(students);
console.log(averagePointsStudent);

/** Snack: Torneo di basket

Crea un array di 3 squadre.

Ogni squadra è un oggetto con:

nome (stringa)

giocatori (array di 5 giocatori)

Ogni giocatore ha:

nome

punti (numero inizialmente 0)

Simula una partita:

Per ogni squadra, genera per ogni giocatore un numero casuale di punti segnati tra 0 e 20.

Calcola:

Il totale punti di ogni squadra

Il giocatore con più punti segnati in tutto il torneo

Stampa in console:

L’array completo delle squadre con i punti dei giocatori

I totali punti di ogni squadra

Il giocatore top scorer (nome, punti e squadra)*/

const basketTeams = [
  {
    nome: "Squadra A",
    giocatori: [
      { nome: "Giocatore A1", punti: 0 },
      { nome: "Giocatore A2", punti: 0 },
      { nome: "Giocatore A3", punti: 0 },
      { nome: "Giocatore A4", punti: 0 },
      { nome: "Giocatore A5", punti: 0 },
    ],
  },
  {
    nome: "Squadra B",
    giocatori: [
      { nome: "Giocatore B1", punti: 0 },
      { nome: "Giocatore B2", punti: 0 },
      { nome: "Giocatore B3", punti: 0 },
      { nome: "Giocatore B4", punti: 0 },
      { nome: "Giocatore B5", punti: 0 },
    ],
  },
  {
    nome: "Squadra C",
    giocatori: [
      { nome: "Giocatore C1", punti: 0 },
      { nome: "Giocatore C2", punti: 0 },
      { nome: "Giocatore C3", punti: 0 },
      { nome: "Giocatore C4", punti: 0 },
      { nome: "Giocatore C5", punti: 0 },
    ],
  },
];

let bestPlayersPoint = 0;
const bestPlayers = [];
const totalPointsTeams = [];

for (let i = 0; i < basketTeams.length; i++) {
  const curTeam = basketTeams[i];
  let teamTotal = 0;

  for (let k = 0; k < curTeam.giocatori.length; k++) {
    const curPlayer = curTeam.giocatori[k];
    curPlayer.punti = generateRandomNumber(0, 20);
    teamTotal += curPlayer.punti;

    if (curPlayer.punti > bestPlayersPoint) {
      bestPlayersPoint = curPlayer.punti;
      bestPlayers.length = 0;
      bestPlayers.push({
        squadra: curTeam.nome,
        nome: curPlayer.nome,
        punti: curPlayer.punti,
      });
    } else if (curPlayer.punti === bestPlayersPoint) {
      bestPlayers.push({
        squadra: curTeam.nome,
        nome: curPlayer.nome,
        punti: curPlayer.punti,
      });
    }
  }

  totalPointsTeams.push({
    nome: curTeam.nome,
    puntiTotali: teamTotal,
  });
}

console.log(basketTeams);
console.log(totalPointsTeams);
console.log(bestPlayers);

//Funzioni di appoggio
// Funzione random
function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

//Funzione media di un array di numeri
function gradePointAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const curElement = array[i];
    sum += curElement;
  }
  return sum / array.length;
}
