let message: string = '我走了，不要想我。我不会回来了';

function goodbye(para: string): never {
    throw new Error(para);
}

// 这个函数会抛出一个错误，这个程序只会终止

let bigbang: boolean;

function hello(para: string): boolean{
    console.log(para);
    return bigbang;
}

function testErrorFunction(): void {
    try {
        const result = hello("我来了");
        console.log("The function returned:", result);
    } catch (e) {
        console.log("The function threw an exception:", e);
    }
}

testErrorFunction();
// 这个函数实际上是 undefined 类型，程序会结束，等待下一次的新生

// 2024-4-4 22:10 观看 https://www.bilibili.com/video/BV1LH4y1n7N7/ 有感