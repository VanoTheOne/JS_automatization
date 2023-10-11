let number = 33;
let summands = 5;

function numSplit(number, summands) {
  if (summands <= 0 || number <= 0) {
    return ("Nope!");
  }

  let parts = [];

  for (let i = 1; i < summands; i++) {
    const min = 1;
    const max = number - (summands - i) * min;
    let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    parts.push(randomValue);
    number -= randomValue;
  }

  parts.push(number);

  return parts;
}

let parts = numSplit(number, summands);
console.log(parts);