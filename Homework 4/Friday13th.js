let startDate = new Date("2000-01-01");
let currentDate = new Date();
let count = 0;

function countFriday13() {
    while (startDate <= currentDate) {
    if (startDate.getDate() === 13 && startDate.getDay() === 5) {
      count++;
      }
      startDate.setDate(startDate.getDate() + 1);
    }
    return count;
  }
  
  let amount = countFriday13();
  console.log("Friday 13th amount from 2000-01-01 untill today:", amount);