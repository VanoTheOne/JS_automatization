//1
let numStr = "352811";

function checkSum(numStr) {
    if (numStr.length !== 6) {
        return "Number length != 6"
    }

    let firstHalf = numStr.slice(0, 3);
    let sumFirsthalf = Array.from(firstHalf, Number).reduce((a, b) => a + b, 0);
    console.log(sumFirsthalf);

    let secondHalf = numStr.slice(3);
    let sumSecondHalf = Array.from(secondHalf, Number).reduce((a, b) => a + b, 0);
    console.log(sumSecondHalf);

    return sumFirsthalf === sumSecondHalf ? "Yes!" : "Nope!";
}

let result = checkSum(numStr);
console.log(result);
