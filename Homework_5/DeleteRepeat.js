//6
//Delete the repeating numbers
let arrToFilter = [10, 20, 30, 20, 40, 40];

function uniqArr(arrToFilter) {
  let checked = {};
  return arrToFilter.filter(function(item) {
    return checked.hasOwnProperty(item) ? false : (checked[item] = true);
  });
}

let newArray = uniqArr(arrToFilter);
console.log(newArray);

//Delete the repeating strings
let stringToFilter = ["John", "Alex", "Nikolas", "Alex", "John"];

function uniqArr1(stringToFilter) {
  let checked = {};
  return stringToFilter.filter(function(item) {
    return checked.hasOwnProperty(item) ? false : (checked[item] = true);
  });
}

let newArray1 = uniqArr1(stringToFilter);
console.log(newArray1);