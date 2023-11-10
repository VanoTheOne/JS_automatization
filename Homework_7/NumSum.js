function randomNum() {
    return Math.floor(Math.random() * 5) + 1;
}

function randomNum1() {
    return Math.floor(Math.random() * 5) + 6;
}


function getNum() {
    return new Promise((res) => {
        setTimeout(() => {
            res(randomNum());
        }, 3000)
    })
}
function getNum1() {
    return new Promise((res) => {
        setTimeout(() => {
            res(randomNum1());
        }, 5000)
    })
}

async function returnal() {
    const result = await getNum();
    console.log("First number:", result);
    const result1 = await getNum1();
    console.log("Second number:", result1);
    const numSum = result + result1;
    console.log("Sum:", numSum);
} 

returnal();