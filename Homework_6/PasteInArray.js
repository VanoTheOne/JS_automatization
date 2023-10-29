//4
let arr = [1, 2, 3, 4, 5];

function pasteInArr() {
    arr.splice(3, 0, "a", "b", "c");
    return arr;
}

let resultArr = pasteInArr();
console.log("arr:", resultArr);

//5
let arr1 = [1, 2, 3, 4, 5];

function pasteInArr1() {
    arr1.splice(1, 0, "a", "b");
    arr1.splice(6, 0, "c");
    arr1.splice(8, 0, "e");
    return arr1;
}

let resultArr1 = pasteInArr1();
console.log("arr2:", resultArr1);
