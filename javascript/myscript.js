

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
    alert("ciao")
    //*chiedere 5 volte il numero all utente
    //  * per ogni numero controlla se presente tra i numeri casuali (array numbersToGuess)
    //  * se contenuto aggiungiamo ad nuovo array dei numeri utente 
    //  * controlliamo la lunghezza dell'array dell'utente e scriviamo quanti ne ha indovinati
    //  * 
}, 3000)

