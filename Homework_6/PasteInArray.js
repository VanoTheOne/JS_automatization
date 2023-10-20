//4
let arr = [1, 2, 3, 4, 5];

function pasteInArr() {
    arr.splice(3, 0, "a", "b", "c");
    return arr;
}

let resultArr = pasteInArr();
console.log("arr:", resultArr);

//5
function pasteInArr1() {
    arr.splice(1, 0, "a", "b");
    arr.splice(6, 0, "c");
    arr.splice(8, 0, "e");
    return arr;
}

let resultArr1 = pasteInArr1();
console.log("arr2:", resultArr1);
