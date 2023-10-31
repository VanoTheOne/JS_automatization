let number = 33;
let summands = 5;
let decimals = 2;

function splitNumber(number, summands, decimals) {
  if (summands <= 0 || number <= 0) {
    return "Nope!";
  }

  let parts = [];

  for (let i = 1; i < summands; i++) {
    const min = 0.01;
    const max = number - (summands - i) * min;
    let randomValue = Math.random() * (max - min) + min;
    let roundedValue = Number(randomValue.toFixed(decimals));
    parts.push(roundedValue);
    number -= roundedValue;
  }

  parts.push(Number(number.toFixed(decimals)));

  return parts;
}

const result = splitNumber(number, summands, decimals);
console.log(result);
