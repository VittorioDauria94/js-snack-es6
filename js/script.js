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
  { nome: "bici10", peso: 8.0 }
];

let lessWeightBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
    const curBike = bikes[i];
    if (curBike.peso < lessWeightBike.peso) {
        lessWeightBike = curBike;
    }
}
console.log(bikes);
console.log("la bici che pesa di meno è:", lessWeightBike.nome, "e pesa:", lessWeightBike.peso, "kg");


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
  { nome: "Squadra10", puntiFatti: 0, falliSubiti: 0 }
];

const teamsFouls = [];
for (let i = 0; i < teams.length; i++) {
    const curTeam = teams[i];
    curTeam.puntiFatti = generateRandomNumber(1, 50);
    curTeam.falliSubiti = generateRandomNumber(1, 20);
    teamsFouls.push({nome: curTeam.nome, falliSubiti: curTeam.falliSubiti})
}

console.log(teams);
console.log(teamsFouls);



// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS

// Snack 4 (Bonus)

// Scrivi una funzione che fonda due array
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3,4,5] → [a,1,b,2,c,3,4,5].


// const array1 = [1, 2, 3, 4, 5];
// const array2 = ["a", "b", "c"]; 




//Funzioni
// Function Random
function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}