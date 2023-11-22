"use strict"

export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;
export function add(a?: number, b?: number) {
    if (a === undefined) {
        return add as (a: number) => (b: number) => number;
    }
    if (b === undefined) {
        return (subB: number) => a + subB;
    }
    return a + b;
}

//2 arguments passed
const sum = add(10, 7);

console.log(sum);

//1 argument passed
const oneNumber = add(10);
const result = oneNumber(7);

console.log(result);

//no arguments
// const noArg = add();

// console.log(noArg);