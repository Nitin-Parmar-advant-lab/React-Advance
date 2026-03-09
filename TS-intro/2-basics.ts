// Primitives: number, string, boolean

let age: number;
age = 12;

let userName: string;
userName = "Me";

let isInstructor: boolean;
isInstructor = false;

// More complex types: array, staring

// this is array of strings
let hobbies: string[];
hobbies = ["name", "number"];

// this will allow any file data type
// let person: any;

// object strucutre define
let person: {
    name: string;
    age: number;
};

person = {
    name: "me",
    age: 8,
};

// this will throw error like this:
// 'isEmployee' does not exist in type '{ name: string; age: number; }'
// person = {
//     isEmployee: true,
// };

// array of object
// this mean store array objecst with give strucutre
let people: {
    name: string;
    age: number;
}[];

// -------------------------------------------
//  Type inference

// let course:string = 'React - course'
// same as this:
let course = "React - course";

// if without specifying type of varible, then typescript will automaticly use type infernece and determine the type of that varible, even if we did not spedicfy it

// when we try to assign diffrent type of data to the same varible then it will throw error, because even if we did not tell explicitly that type of this varible is this but typescript know that

// this called type inference

// course = 1234;
// throw error: Type 'number' is not assignable to type 'string'.ts(2322)

// -------------------------------------------
// Union types:

// if want more then one type in same varible for that we have union types
// Union type is a type definition that allows more than one type
// union type can be as many as can
// like : let course2: string | number | boolon | string[] = "kabira speaking"

let course1: string | number = "React the course";

course1 = 12345; //now error gone

// -------------------------------------------
// Type Aliases

// for not repeting again and again same type definition we use type aliases

// without type aliases
let person1: {
    name: string;
    no: number;
};

let person2: {
    name: string;
    no: number;
}[];

// using type aliases:
type Person = {
    name: string;
    no: number;
};

let person3: Person;

let person4: Person[];
