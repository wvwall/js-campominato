var fieldDOM = document.querySelector("#minefield");
var div;
var bombe = [];
var vite = [];
var maxNumber = 100;

bombe = creaBombe(bombe, maxNumber);
console.log(bombe); //check




for (var i = 1; i <= 100; i++) {
    var div = document.createElement('DIV');
    div.addEventListener("click", clickSquare)
    fieldDOM.appendChild(div);
}

function clickSquare() {
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
     alert("Hai scelto la modalità con "+ maxNumber + " numeri.");
    
    
    
    creaBombe(bombe, maxNumber);
    var risultato = play(bombe, vite, maxNumber);
    alert("GAME OVER: Quando smetti di giocare non sei adulto, sei spento.");
    alert("Il tuo punteggio è: " + risultato);
    alert("I numeri bombe erano: " + bombe); //check
    
}

function creaBombe(array, max) {
    while (array.length < 16 ) {
        var numero = randomNumberRange(1, max);

        if (!array.includes(numero)){
            array.push(numero);
        }
    }
    return array;
}

function randomNumberRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
        console.log("Non sono numeri");
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
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
