//3
const startNumber = 1;
const fibLength = 10;

function fibGen(start, length) {
  let fib = [start];

  while (fib.length < length) {
    const nextNum = fib[fib.length - 1] + (fib.length >= 2 ? fib[fib.length - 2] : 0);
    fib.push(nextNum);
  }

  return fib;
}

let fibSeries = fibGen(startNumber, fibLength);
console.log(fibSeries);