// todo：本节讲解 TypeScript 的算数运算符
let x1 = 1;

// *算术运算符
console.log(x1 + 1); // 2
console.log(x1 - 1); // 0
console.log(x1 * 2); // 2
console.log(x1 / 2); // 0.5，注意这里是浮点数，因为 TypeScript 并没有整数类型
// *这里的运算都不会改变 x1 的值，类似于 C++ 的常量引用

x1 += 1; // TypeScript 也支持 += 运算符
x1 -= 1; // 类似的

x1 += 3;
console.log(x1 % 3); // 1，取余运算

// *自增自减运算符
x1 = 1;
console.log(x1++); // 1
console.log(x1); // 2
console.log(++x1); // 3
console.log(x1); // 3

// 和 C++ 一样，TypeScript 也支持自增自减运算符，后置自增自减运算符会先返回原值再进行运算，前置自增自减运算符会先进行运算再返回值