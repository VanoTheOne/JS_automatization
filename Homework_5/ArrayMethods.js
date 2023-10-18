//1
let arr = [1, 2, 3, 4, 5, 6];

function reverseArr() {
    let reversed = arr.reverse();
    console.log(reversed);
}

reverseArr();

//2
let arr1 = [15, 37, 198, 2, 66];
let max = arr1 => arr1.reduce((x, y) => Math.max(x, y));

console.log(max(arr1));