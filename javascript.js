//задача 1
console.log('Задание 1');
const n = 9;

if (n > 0) {
    console.log(`Число ${n} положительное`);
}
else if (n < 0) {
    console.log(`Число ${n} отрицательное`);
}
else {
    console.log(`Число ${n} = 0`);
}

//задача 2
console.log('Задание 2');

const weight = prompt('Введите ваш вес');
const height = prompt('Введите ваш рост');
const height2 = Number(height) / 100;
const result = weight / height2 ** 2;

console.log(`Ваш ИМТ: ${Math.round(result)}`);

if (Math.round(result) <= 16) {
    console.log(`Ваш ИМТ находится в диапозоне 16 и менее (выраженый дефицит массы)`);
}
else if (Math.round(result) <= 17.9) {
    console.log(`Ваш ИМТ находится в диапозоне 16-17.9 (недостаточная масса тела)`);
}
else if (Math.round(result) <= 24.9) {
    console.log(`Ваш ИМТ находится в диапозоне 18-24.9 (нормальный вес)`);
}
else if (Math.round(result) <= 29.9) {
    console.log(`Ваш ИМТ находится в диапозоне 25-29.9 (избыточная масса тела)`);
}
else if (Math.round(result) <= 34.9) {
    console.log(`Ваш ИМТ находится в диапозоне 30-34.9 (ожирение 1 степени)`);
}
else if (Math.round(result) <= 39.9) {
    console.log(`Ваш ИМТ находится в диапозоне 35-39.9 (ожирение 2 степени)`);
}
else {
    console.log(`Ваш ИМТ находится в диапозоне 40 и более (ожирение 3 степени)`);
}


//задача 3
console.log('Задание 3');
const month = 4;
let nameMonth;

switch (month) {
    case 1:
        nameMonth = 'Январь';
        break;
    case 2:
        nameMonth = 'Февраль';
        break;
    case 3:
        nameMonth = 'Март';
        break;
    case 4:
        nameMonth = 'Апрель';
        break;
    case 5:
        nameMonth = 'Май';
        break;
    case 6:
        nameMonth = 'Июнь';
        break;
    case 7:
        nameMonth = 'Июль';
        break;
    case 8:
        nameMonth = 'Август';
        break;
    case 9:
        nameMonth = 'Сентябрь';
        break;
    case 10:
        nameMonth = 'Октябрь';
        break;
    case 11:
        nameMonth = 'Ноябрь';
        break;
    case 12:
        nameMonth = 'Декабрь';
        break;
    default:
        nameMonth = 'Неверный месяц'
}

console.log(nameMonth);


//задача 4
console.log('Задание 4');
const num = prompt('Введите цифру');
let result2;

switch (Number(num)) {
    case 1:
        result2 = 'Этой цифре соответсвуют символы: !';
        break;
    case 2:
        result2 = 'Этой цифре соответсвуют символы: @ и "';
        break;
    case 3:
        result2 = 'Этой цифре соответсвуют символы: # и №';
        break;
    case 4:
        result2 = 'Этой цифре соответсвуют символы: $ и ;';
        break;
    case 5:
        result2 = 'Этой цифре соответсвуют символы: %';
        break;
    case 6:
        result2 = 'Этой цифре соответсвуют символы: ^ и :';
        break;
    case 7:
        result2 = 'Этой цифре соответсвуют символы: ? и &';
        break;
    case 8:
        result2 = 'Этой цифре соответсвуют символы: *';
        break;
    case 9:
        result2 = 'Этой цифре соответсвуют символы: (';
        break;
    case 0:
        result2 = 'Этой цифре соответсвуют символы: )';
        break;
}

console.log(result2);

