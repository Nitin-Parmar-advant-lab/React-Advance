// Functions and types:

function add(a: number, b: number) {
    return a + b;
}
// when we hover over the function:
// function add(a: number, b: number): number
// by default return type id number and that is determined by TS by type inference

// in this by default type internes work, mean we can see that by default script knows that return type will be number

// but we can also speficy if we want to
function adds(a: number, b: number): number | string {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}
// function printOutput(value: any): void
// In this default return type is void

// -------------------------------------------

// Generics
// it's helps us to write functions, which are type safe yet flexible

function insertAtBeginningWithoutGenerics(array: string, value: string) {
    const newArray = [value, ...array];
    return newArray;
}
//function insertAtBeginningWithoutGenerics(array: string, value: string): string[]

// without using Generics function will be fixed, as we can see above that function will return array of string always, so it is not reusable

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
// const stringArray: number[]
// by using generics based on input value TS know return type of the function
// without

// Output: [-1, 1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
// const stringArray: string[]
// type of the stringArray is the string, because we are passing the string
// and Generics apply their magic

/*
A Closer Look At Generics
Generic Types ("Generics") can be tricky to wrap your head around.

But indeed, we are working with them all the time - one of the most prominent examples is an array.

Consider this example array:

let numbers = [1, 2, 3];
Here, the type is inferred, but if we would assign it explicitly, we could do it like this:

let numbers: number[] = [1, 2, 3];
number[] is the TypeScript notation for saying "this is an array of numbers".

But actually, number[] is just syntactic sugar!

The actual type is Array. ALL arrays are of the Array type.

BUT: Since an array type really only makes sense if we also describe the type of items in the array, Array actually is a generic type.

You could also write the above example liks this:

let numbers: Array<number> = [1, 2, 3];
Here we have the angle brackets (<>) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (T in the previous lecture).

Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:

let numbers = [1, 2, 3];
But if we want to explicitly set a type, we could do it like this:

let numbers: Array<number> = [1, 2, 3];
Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:

let numbers: number[] = [1, 2, 3];
If we take the example from the previous lecture, we could've also set the concrete type for our placeholder T explicitly:

const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section!
*/
