//4 
const num1 = 3487;
const num2 = 3794;

function compareNumbers(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  let posAndVal = 0;
  let onlyVal = 0;

  const num1Digit = {};

  for (let i = 0; i < num1Str.length; i++) {
    const digit = num1Str[i];
    num1Digit[digit] = (num1Digit[digit] || 0) + 1;
  }

  for (let i = 0; i < num2Str.length; i++) {
    const digit = num2Str[i];
    if (digit in num1Digit) {
      if (num1Str[i] === digit) {
        posAndVal++;
      } else {
        onlyVal++;
      }
      if (num1Digit[digit] === 1) {
        delete num1Digit[digit];
      } else {
        num1Digit[digit]--;
      }
    }
  }
  
  return [posAndVal, onlyVal];
  }

const [posAndVal, onlyVal] = compareNumbers(num1, num2);

console.log(`Matching positions and values: ${posAndVal}`);
console.log(`Matching only values: ${onlyVal}`);
