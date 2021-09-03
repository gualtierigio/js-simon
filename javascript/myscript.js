

let secretNumbers = [];

function randomNumbers(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function isFillNumbers(totNumbers){ 

    for (let i = 0; i < 5; i++){

        numeroCorrente = randomNumbers(1, 100);

        totNumbers.push(numeroCorrente)
    }
}

document.getElementById("indovina").innerHTML = secretNumbers;


isFillNumbers(secretNumbers)

console.log(secretNumbers);