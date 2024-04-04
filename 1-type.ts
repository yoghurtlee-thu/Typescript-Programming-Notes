// todo：本节讲解 TS 的基础概念——类型
function foo(para: string) {
    console.log(para + ' is a string');
}

foo('TypeScript'); // legal
// foo(1); // !illegal! Argument of type '1' is not assignable to parameter of type 'string'. However, this call is perfectly legal in JavaScript and may cause unexpected results.

let languange = 'TypeScript'; // let 是一个关键字，用于声明变量
let languange2: string = 'TypeScript'; // : string 是类型注解，用于声明变量的类型。在Typescript中，类型注解是可选的，因为TS可以根据变量的值自动推断出变量的类型
// languange2 = 1; // !illegal! Type '1' is not assignable to type 'string'
const PI = 3.14; // const 是一个关键字，用于声明常量
const PI2: number = 3.14; // 或者也可以这样。numbers 是数字类型