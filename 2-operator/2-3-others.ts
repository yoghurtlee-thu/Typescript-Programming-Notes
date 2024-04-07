// todo：本节讲解 TypeScript 的其他运算符

// *位运算符
// 位运算符是对二进制数进行操作的运算符，和 C++ 的位运算符类似，但是有一点不同，就是 TypeScript 的位运算符会打印十进制结果，而不是 0 或 1

let x1 = 5 & 1; // 逻辑乘法
console.log(x1);

let x2 = 5 | 1; // 逻辑加法
console.log(x2);

let x3 = 5 ^ 1; // 异或
console.log(x3);

let x4 = ~5; // 逻辑非
console.log(x4);

let x5 = 5 << 1; // 左移。5 的二进制是 101，左移 1 位后是 1010，转换成十进制是 10
console.log(x5);

let x6 = 5 >> 1; // 右移。5 的二进制是 101，右移 1 位后是 10，转换成十进制是 2
console.log(x6);

let x7 = 5 >>> 1; // 无符号右移。5 的二进制是 101，右移 1 位后是 10，转换成十进制是 2
console.log(x7);

// 在学习离散数学的相关知识后，我对二进制数字的运算有了更深的理解

// *三元运算符

let triple = (x1 == 5) ? 3 : 4; // 三元运算符，和 C++ 的三元运算符类似

// *typeof 运算符

let x8 = 5;
console.log(typeof x8); // number