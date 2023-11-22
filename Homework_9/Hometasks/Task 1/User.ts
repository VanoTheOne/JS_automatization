"use strict"

export interface User {
    name: string,
    age: number,
    occupation?: string,
    car?: string,
    children?: number
}

//добавил ? к occupation, чтобы не было конфликта со вторым заданием из-за разных модификаторов при объявлении occupation

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
]

function showUsers(users: User[]): void {
    users.forEach((user: User) => {
        console.log(`${user.name} is ${user.age} and works as ${user.occupation}.`);
        if (user.car){
            console.log(`${user.name} drives ${user.car}`);
        } else if (user.children !== undefined) {
            console.log(`${user.name} has ${user.children} children.`);
        }
    });
}

showUsers(users);
