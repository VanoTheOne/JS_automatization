//6

let numArray = [3, 4, 1, 2, 7, 30, 50];

function sortArray(a, b) {
  return (b - a);
  }

let resultArray = numArray.slice().sort(sortArray);
console.log(`Sorted array: `, resultArray);