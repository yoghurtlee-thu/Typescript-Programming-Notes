// todo：本节讲解 TS 的基础概念——类型
function foo(para: string) {
    console.log(para + " is a string");
}

function bar(para: any) {
    console.log(para);
}

foo("TypeScript"); // legal
// foo(1); // !illegal! Argument of type '1' is not assignable to parameter of type 'string'. However, this call is perfectly legal in JavaScript and may cause unexpected results.

let languange = "TypeScript"; // let 是一个关键字，用于声明变量
let languange2: string = "TypeScript"; // : string 是类型注解，用于声明变量的类型。在Typescript中，类型注解是可选的，因为TS可以根据变量的值自动推断出变量的类型
// languange2 = 1; // !illegal! Type '1' is not assignable to type 'string'
const PI = 3.14; // const 是一个关键字，用于声明常量
const PI2: number = 3.14; // 或者也可以这样。numbers 是数字类型

// 字符串类型：

let str: string = "TypeScript";
let msg: string = `Hello, ${str}`; // 模板字符串

// 布尔值：

let b1: boolean = true;
let b2: boolean = false;
let b3: boolean = !!1; // 加两个感叹号，可以将任意类型的值转换为布尔值，这个过程叫做类型断言

// 数字：

let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制

// any：
let wanjinyou: any = 1;
wanjinyou = "TypeScript";
wanjinyou = true;
wanjinyou = [1, 2, 3, 4, 5];
wanjinyou = { name: "TypeScript", age: 1 };
wanjinyou = function () {
    console.log("TypeScript");
};
wanjinyou = null;
wanjinyou = undefined;
// any 类型可以是任意类型，怎么玩都行。但是在实际开发中，应该尽量避免使用 any 类型，因为 any 类型会破坏 TypeScript 的类型检查机制

export {}