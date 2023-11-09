//2
let n = 1000;
let breakNum = 50;

function divideNum() {
    let num = 0;
        while (n >= breakNum) {
        n /= 2;
        num++;
        }

        return num;  
    }

let num = divideNum();
console.log(n)
console.log(num);