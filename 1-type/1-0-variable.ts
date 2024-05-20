var x1 = 1;
let x2 = 1;
let x3: number = 1; // 可以让编译器自动推导类型

var x1 = 3; // var 声明的变量可以用 var 再次修改
// var x1 = '2'; // !但是不能改类型
// let x2 = 3; // !let 不能重新声明

function foo() {
    console.log(x4);
    var x4;
    x4 = 1;
}

function bar() {
    // console.log(x5); // !let 不能在声明前使用
    let x5;
}

foo();

let 中文 = 1;
console.log(中文); // 变量名可以是中文，这可能是新版的特性

const x6: number = 1;
// x6 = 2; // !const 不能重新赋值

const arr: Array<number> = [1, 2, 3]; // （伪）常数组对象

// arr = [1, 2, 4]; // !这不行

arr.push(4); // 这可以，因为这个变量没有成为新的对象，有点像是 C++ 的 const 指针

const frozen_arr1: ReadonlyArray<number> = [1, 2, 3]; // 真正的常数组对象
const frozen_arr2: readonly number[] = Object.freeze([1, 2, 3]); // 也可以这样创建

// 类型断言
let str = "1"; // 类型推导为 string
// let num1 = str as number; // !这样是不行的
let num1 = <number>(<any>str); // 1

export {}