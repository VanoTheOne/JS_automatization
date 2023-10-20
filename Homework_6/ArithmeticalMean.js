//3
let arr = [12, 15, 20, 25, 59, 79];

function arithMean() {
    let calcArithMean = (arr.reduce((a, b) => a + b, 0)) / arr.length;
    return calcArithMean;
}

let result = arithMean();
console.log(arr.reduce((a, b) => a + b, 0));
console.log(result);