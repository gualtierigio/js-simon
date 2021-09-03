

function randomNumbers(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getCasualArray(length){ 

    let numbersToGuess = [];

    for (let i = 0; i < length; i++){

        numeroCorrente = randomNumbers(1, 100);

        numbersToGuess.push(numeroCorrente)
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

