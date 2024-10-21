/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array 
contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names)

// Dichiara la funzione qui.

function getFirstLetters(array) {
    const letters = [];
// Invoca la funzione qui e stampa il risultato in console
    for(let i = 0; i < array.length; i++) {
        const names = array[i];
     //   letters.push(names.charAt(0));

        
    }

    return letters;
}
console.log(getFirstLetters(names));




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]