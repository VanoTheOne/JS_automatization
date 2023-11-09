function delay() {
    return Math.floor((Math.random() * 5000) + 1000);
}

const prom = new Promise((res) => {
    setTimeout(() => {
        res(1);
    }, delay());
});
const prom1 = new Promise((res) => {
    setTimeout(() => {
        res(2);
    }, delay());
});
const prom2 = new Promise((res) => {
    setTimeout(() => {
        res(3);
    }, delay());
})

Promise.race([prom, prom1, prom2])
.then((data) => {
    console.log(data);
});
