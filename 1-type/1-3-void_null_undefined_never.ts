// todo：本节讲解 TypeScript 中的四尊大佛——void、null、undefined 和 never
// *菩提本无树，明镜亦非台，本来无一物，何处惹尘埃——禅宗六祖慧能大师

// *1. void 类型
function bar(para: any): void {
    console.log(para); // 由于打印函数没有返回值，因此返回值类型是 void，和 C++ 的 void 类似
}

let v: void = undefined; // 没错，有 void 类型的变量，但只能被赋值为 undefined

// *2. null 和 undefined 类型

let u: undefined = undefined; // undefined 类型的变量只能被赋值为 undefined，代表未定义
let n: null = null; // null 类型的变量只能被赋值为 null，代表空值

bar(u); // 会输出 undefined，不过仔细看会发现输出是灰色的
bar(n); // 会输出 null，但是不是灰色的，因为 null 只是空值，不是未定义

// *3. never 类型
let fuck: never;
// bar(fuck); // !illegal！由于这个类型根本不可能有值，因此不能对其调用函数，也不能将任何值赋给这个变量

function myerror(): never {
    console.log("Fuck!");
    return fuck;
}

export function testErrorFunction(): void {
    try {
        const result = myerror(); // 尝试调用 error 函数并获取返回值
        console.log("The function returned:", result); // 这行代码不会执行，因为 error 函数不会返回任何值
    } catch (e) {
        console.log("The function threw an exception:", e);
    }
}

// 调用测试函数
testErrorFunction();
