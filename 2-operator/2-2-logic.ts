// todo：本节讲解 TypeScript 的逻辑运算符

let x1 = 1;

let b1 = <boolean>(<any>x1);

console.log(b1, !b1, b1 && false, b1 || true);

// TypeScript 的逻辑运算符和 C++ 的逻辑运算符类似，但是有一点不同，就是 TypeScript 的逻辑运算符会打印 true/false，而不是 0 或 1
