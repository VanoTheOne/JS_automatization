"use strict"

type MapperFunction<T, D> = (value: T, index: number, array: T[]) => D;

export function map<T, D>(mapper: MapperFunction<T, D>, input: T[]): D[];
export function map<T, D>(mapper: MapperFunction<T, D>): (input: T[]) => D[];
export function map(mapper: any, input?: any): any {
    if (arguments.length === 0){
        return map;
    }
    
    if (arguments.length === 1) {
        return function subFunction(subInput: any[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

//2 arguments passed
const doubleArr = (x: number) => x * 2;
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = map(doubleArr, numbers);

console.log(doubledNumbers);

//1 argument passed
const tripleArr = (x: number) => x * 3;
const mapWithOneArg = map(tripleArr);
const result = mapWithOneArg([1, 2, 3]);

console.log(result);

//no arguments
// const myMap = map();

// console.log(myMap);