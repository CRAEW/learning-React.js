// let & const
// const myName = 'Wendy';
// console.log(myName);

// let otherName = "Manu";
// console.log(otherName);

// otherName = "Jessy";
// console.log(otherName);

// Arrow functions
// const printMyName = name => {
//     console.log(name);
// }
// printMyName('Max');

// const printPerson = (name, age) => {
//     console.log(name, age);
// }
// printPerson('Wendy', 28);

// const multiply = (number) => number * 2;
// console.log(multiply(2));

// Modular code - import and export js files

// CLASSES
// class Human {
//     constructor() {
//         this.gender = 'female';
//     }
//     printGender() {
//         console.log(this.gender);
//     }
// }
// class Person extends Human {
//     constructor() {
//         super(); // executes the parent class Human
//         this.name = 'Wendy';
//     }

//     printName() {
//         console.log(this.name);
//     }
// }

// class Human {
//     gender = 'female';

//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     name = 'Wendy';

//     printName = () => {
//         console.log(this.name);
//     }
// }


// const person = new Person();
// person.printName();
// person.printGender();


// SPREAD & REST OPERATORS -> ...

/* SPREAD = create new array/object from old and add new items/properties
    const newArray = [...oldArray, 1, 2] 
    const newObject = {...oldObject, newProp: 5}
*/
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// const person = {
//     name: 'Max'
// }
// const newPerson = {
//     ...person,
//     age: 28
// }
// console.log(newPerson);

/* REST = to merge a list or function arguments into an array
    function sortArgs(...args) {
        return args.sort()
    }
*/
// const filter = (...args) => {
//     return args.filter(el => el === 3);
// }
// console.log(filter(1,2,3));

// DESTRUCTURING
// const numbers = [1, 2, 3];
// [num1, ,num3] = numbers;
// console.log(num1,num3);

// const person = {
//     name = 'Wendy',
//     age = 37
// }
// {name} = {person}
// console.log(name);

// REFERENCE AND PRIMITIVE TYPE REFRESHER
// const number = 1;
// const num2 = number; // copie from original variable
// console.log(num2);

// const person = {
//     name: 'Wendy'
// };
// const secondPerson = person; // references back to oroginal object/array

// to copie you need to use this method:
// const thirdPerson = {
//     ...person
// };

// person.name = 'Jessy';

// console.log(secondPerson);
// console.log(thirdPerson);


// REFRESHING ARRAY FUNCTIONS
// const numbers = [1,2,3];
// const doubleNumArray = numbers.map((num) => {
//     return num * 2;
// });
// console.log(numbers);
// console.log(doubleNumArray);