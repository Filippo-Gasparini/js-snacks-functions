/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array 
con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log (names)


// Dichiara la funzione qui.

//const newArray = names.map(name => name.charAt(0));

function getFirstLetters(array) {
    const letters = [];

    for(let i = 0; i < array.length; i++) {
        const name = array[i];
        letters.push(name.charAt(0));
    }

    return letters;
}
console.log(getFirstLetters(names));

// Invoca la funzione qui e stampa il risultato in console

console.log (newArray)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]