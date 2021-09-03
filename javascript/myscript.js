

let secretNumbers = [];

function randomNumbers(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function isFillNumbers(totNumbers){

    for (let i = 0; i < 5; i++){
        totNumbers.push(randomNumbers(1, 5))
    }
}