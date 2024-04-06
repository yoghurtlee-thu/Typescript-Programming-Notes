// todo：本节讲解 TypeScript 的数组、元组和枚举

// * 数组
let arr: number[] = [1, 2, 3, 4, 5]; // 创建一个数字数组
let arr1 = Array<number>(5); // 这种方式称为数组泛型

for (let i = 0; i < arr1.length; i++) {
    arr1[i] = i + 1;
} // This for loop is quite similar to C++, Uh-huh?

// * 元组
let tuple: [number, string, boolean];
tuple = [1, "2", true]; // legal
// tuple = ['1', 2, false]; // !illegal

// 元素的概念和 C++ 的 tuple 容器类似，因此我也将它称为 tuple。但是 TypeScript 的元组是固定长度的，不能增加或减少元素

console.log(tuple[0]); // 输出 1

// * 枚举
enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Green;

console.log(c); // 输出 1

// 枚举可以看作给数组的每个元素赋予了一个名字，这样就可以通过名字来访问数组元素，而不必在乎其索引值