// 1)-------------Напишите функцию, которая найдёт сумму квадратных корней элементов массива и округлит её до двух знаков после запятой
// [1,2,3,4,5] --> 8.382332347441762 --> 8.38

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.sqrt(arr[i]);
    }
    return sum.toFixed(2);
}

const array = [1, 3, 6, 5];
const result = sum(array);
console.log(result);
// 2)---------------Напишите функцию на проверку если ли в массиве есть два одинаковых элемента подряд.
// [1, 2, 3, 3, 4, 5] --> true
// [1,2,3] --> false
// ['hello', 'my', 'my', 'friend'] --> true
function одинаковыйЭлемент(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(одинаковыйЭлемент([1, 2, 3, 3, 4, 5]));
console.log(одинаковыйЭлемент([1, 2, 3]));
console.log(одинаковыйЭлемент(['hello', 'my', 'my', 'did']));




// 3)------------------Напишите функцию, которая принимает в себя строку и посчитает сколько в ней гласных букв.
// В строке будут только русские слова.
// Гласных букв - десять: а, у, о, и, э, ы, я, ю, е, ё
// 'привет' --> 2
function vowels(str) {
    const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'е', 'ё'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(vowels('идти'));     


// 4)------------------Напишите функцию, которая реализует функциональность метода filter. Функция принимает массив и callback.
// Например если мы фильтруем массив на чётные числа c помощью filter так:
// const arr = [1, 2, 3, 4, 5] 
// arr.filter(el => el % 2 === 0) --> [2, 4]
// То наша функция должна делать то же самое:
// bizdinFilter(arr, callback) --> [2, 4]


function bizdinFilter(arr, callback) {
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

const arr = [2, 4, 1, 7, 1, 9, 20];
const filteredArr = bizdinFilter(arr, el => el % 2 === 0);
console.log(filteredArr);