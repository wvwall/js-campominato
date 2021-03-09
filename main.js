
var bombe = [];
var vite = [];
var maxNumber = prompt("Scegli la difficoltà: PRINCIPIANTE=100 INTERMEDIO=80 CAMPIONE=50" );
 switch (maxNumber) {
     case 100 :
         maxNumber = 100;
      break;  
    case 80 :
        maxNumber = 80;
    break;
    case 50:
        maxNumber = 50;
 }
 console.log("Hai scelto la modalità con "+ maxNumber + " numeri.");


console.log(bombe); //check
creaBombe(bombe, maxNumber);
var risultato = play(bombe, vite, maxNumber);
console.log("GAME OVER: Quando smetti di giocare non sei adulto, sei spento.");
console.log("Il tuo punteggio è: " + risultato);


//FUCTIONS
// generare 16 num casuali tra 1 e 100 per il computer

function randomNumberRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
        console.log("Non sono numeri");
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
 // verifico per aggiungere in array
 
 function creaBombe(array, max) {
     while (array.length < 16 ) {
         var numero = randomNumberRange(1, max);

         if (!array.includes(numero)){
             array.push(numero);
         }
     }
 }

 //chiedere all'utente di inserire un numero alla volta e verificare 

 function play(bombe, vite, maxNumber) {
     while (vite.length < maxNumber - 16){
         var numeroUtente = parseInt(prompt("Inserisci un numero e resta in vita: "));

        if(!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && !vite.includes(numeroUtente)) {
            if (!bombe.includes(numeroUtente)) {
                vite.push(numeroUtente);
            }else {
                return vite.length;
            }
        } 
    } return vite.length;
}
