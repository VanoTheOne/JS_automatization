function randomNum() {
    return Math.floor((Math.random() * 5) + 1);
}

function getNum() {
    return new Promise((res) => {
        setTimeout(() => {
            res(randomNum());
        }, 3000)
    })
}

async function returnal() {
    const result = await getNum();
    const sqaredRes = result * result;
    console.log(sqaredRes);
} 

returnal();