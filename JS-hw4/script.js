// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
// for (let index = 0; index < 11; index++) {
//     if (index === 0) {
//         console.log(`${index} - это ноль`);
//     } else {
//         if (index % 2 === 0) { console.log(`${index} - это четное число`); }
//         if (index % 2 !== 0) { console.log(`${index} - это нечетное число`); }
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
// const arr = [];
// let sum = 0;
// let min = 9;
// let isThree = false;
// for (let index = 0; index < 5; index++) {
//     arr[index] = Math.floor(Math.random() * (9 - 0 + 1) + 0);
//     sum = sum + arr[index];
//     if (arr[index] < min) { min = arr[index]; }
//     if (arr[index] === 3) { isThree = true; }
// }
// console.log(arr);
// console.log(sum);
// console.log(min);
// console.log((isThree === true) ? 'Тройка есть' : 'тройки нет');


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
const arr = [];
for (let index = 0; index < 20; index++) {
    for (let i = 0; i <= index; i++) {
        arr.push('x')
    }
    console.log(arr.join());
    for (let ii = arr.length; ii >= 0; ii--) {
        arr.pop();
    }
}