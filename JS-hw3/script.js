// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// function vozvKub(num) {
//     return num * num * num;
// }
// console.log(`2^3: ${vozvKub(2)}`);
// console.log(`3^3: ${vozvKub(3)}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
// function nalog(num) {
//     return num * 0.87;
// }
// let num = Number(prompt('Enter number'));
// if (isNaN(num) !== true) {
//     console.log(`Net salary is ${nalog(num)}`);
// } else {
//     alert('Incorrect enter');
// }

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
// function maxnum(a, b) {
//     if (a > b) { return a; }
//     else if (b > a) { return b; }
//     else { return a;}
// }
// let num1 = Number(prompt('Enter number 1'));
// let num2 = Number(prompt('Enter number 1'));
// let num3 = Number(prompt('Enter number 1'));
// console.log(`max num ${maxnum(num1, maxnum(num2, num3))}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
function summ(a, b) {
    return a + b
}

function razn(a, b) {
    if (a > b) { return a - b; }
    else if (b > a) { return b - a; }
    else { return 0; }
}

function umnoj(a, b) {
    return a * b
}

function delen(a, b) {
    return a / b
}

console.log(summ(2, 6));
console.log(razn(2, 6));
console.log(umnoj(2, 6));
console.log(delen(2, 6));