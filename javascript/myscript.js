

function randomNumbers(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getCasualArray(length){ 

    let numbersToGuess = [];

    let i = 0;

    while (i < length) {

        numeroCorrente = randomNumbers(1, 101);

        if (numbersToGuess.includes(numeroCorrente)){
            i < length;
        }
        else{
            numbersToGuess.push(numeroCorrente);
            i++;
        }
    }

    return numbersToGuess
}


let numbersToGuess = getCasualArray(5)

alert(numbersToGuess);

setTimeout(function(){

    let numeriUtente = [];

    for (let i = 0; i < 5; i++){
        numeroScelto = parseInt(prompt("che numero ti ricordi?"))

        if (numbersToGuess.includes(numeroScelto)){
            numeriUtente.push(numeroScelto);
        }
    }

    console.log("hai indovinato questi numeri " + numeriUtente + " it tuo punteggio è di " + numeriUtente.length + " su 5");

}, 3000)

