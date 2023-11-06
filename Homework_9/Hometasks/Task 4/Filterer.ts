"use strict"

type FiltererFunction<T> = (value: T, index: number, array: T[]) => boolean;

export function filter<T>(filterer: FiltererFunction<T>, input: T[]): T[];
export function filter<T>(filterer: FiltererFunction<T>): (input: T[]) => T[];
export function filter<T>(filterer: FiltererFunction<T>, input?: T[]) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input!.filter(filterer);
}

//2 arguments passed
const filt1 = (value: number) => value > 5;
const numbers = [7, 10, 3, 4, 5];
const filtNumbers = filter(filt1, numbers);

console.log(filtNumbers);

//with words
const filt2 = (value: string) => value.length < 6; 
const words = ['apple', 'orange', 'banana', 'grape']; 
const filtWords = filter(filt2, words);

console.log(filtWords);

//1 argument passed
const filt3 = (value: number) => value <= 10;
const filtWithOneArg = filter(filt3);
const result = filtWithOneArg([20, 5, 10, 7]);

console.log(result);

//no arguments
// const justFilt = filter();

// console.log(justFilt);