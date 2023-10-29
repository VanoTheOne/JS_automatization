//5
//Sort the numbers
let numArray = [15, 37, 198, 2, 66, 15];

numArray.sort(function (a, b) {
  return a - b;
});

console.log(numArray);

//Sort the strings
let stringArray = ["Hallelujah!", "I", "did", "it"];

let mappedString = stringArray.map(function(el, i) {
  return {index: i, value: el.toLowerCase()};
});

mappedString.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

let stringResult = mappedString.map(function (el) {
  return stringArray[el.index];
});

console.log(stringResult);

//stringArray.sort(function (a, b) {
//  return a.localeCompare(b);
//});