// Домашнее задание к занятиям 4 / 5

// ###1 
//     Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию
//     строки, массивы и циклы использовать запрещено.

// ###2
//     Написать функцию проверки на спам. Функция принимает на вход текст и спам - слова.
//     Определить по 5-ти бальной шкале, насколько часто в тексте встречается спам. 
//     Результат вернуть из функции

// ###3
//     Напишите функцию, которая в зависимости от переданного
//     в нее целочисленного аргумента count, будет выводить слово
//     «товар» в нужно форме («12 товаров», но «22 товара» и тд).

// ###4
//     Напишите функцию, которая принимает на вход 3 аргумета 
//     (usersArr, from и to), где usersArr - массив пользователей, 
//     from - минимальный возраст и to - максимальный возраст 
//     (если to не задан, максимальный возраст не ограничен). 
//     Функция возвращает логины пользователей из массива usersArr, 
//     возраст которых находится в диапазоне [from; to)

// ###5
//     Напишите функцию, которая принимает на вход 2 обязательных аргумета
//     (usersArr, favouriteLang), где usersArr - массив пользователей, favouriteLang
//     - предпочитаемый язык программирования (агрумент передается строкой).
//     Функция возвращает логины пользователей из массива usersArr,
//     у которых в списке предпочитаемых языков есть favouriteLang

// ###6
//     Напишите функцию, которая принимает на вход массив и сортирует
//     его по названию городов пользователей (от А до Я).

//###1 
//  
function getNumberSum(number){   
    if (arguments[1] === undefined)
    {
        arguments[1] = 0;
    }
    if(number % 10 === 0){
        if (number === 0){
            console.log(`final sum = ${arguments[1]}`);
            return arguments[1];
        }
        number /= 10;
    }
    arguments[1] += number % 10; 
    number -= number % 10; 
    return getNumberSum(number, arguments[1]);
}

//###2
function spamFind(text, ...spam){
    let textArr = wordsFromSentence(text);
    let counter = 0;
    for (let i = 0; i < textArr.length; i++) {
        spam.forEach(function(element){
            if (element === textArr[i]) {
                counter++;
            }
        });
    }
    let mark = counter/textArr.length ;
    if (mark < 0.2 ) {mark = 5}
    else if(mark < 0.4) {mark = 4}
    else if (mark < 0.6) {mark = 3}
    else if (mark < 0.8) {mark = 2}
    else if (mark <= 1) {mark = 1}
    return mark;
}

function wordsFromSentence(str, numberFlag = true) {
    let regExp = (numberFlag) ? /[\p{Z}\p{P}\p{M}\p{S}\p{N}]/u : /[\p{Z}\p{P}\p{M}\p{S}\p{L}]/u;
    return str.split(regExp).filter(e => e !== "");
}

//###3
function goodsCount(number){
    number = parseInt(number);
    console.log(number);
    let goods = "товар";
    if (11 <= number % 100 && number % 100 <= 19) {
        goods += "ов";
    }
    else if (2 <= number % 10 && number % 10 <= 4) {
        goods += "а";
    }
    else if (5 <= number % 10 && number % 10 <= 9 || number % 10 === 0) {
        goods += "ов";
    }
    return `${number} ${goods}`;
}

//###4
let getByAge = (usersArr, from, to = +Infinity) => usersArr.filter(e => e.age >= from && e.age < to);

//###5
let getByLanguage = (usersArr, language) => usersArr.filter(e => e.favouriteLangs.some(e => e === language.toLowerCase())); 

function sortByCity(usersArr){
usersArr.sort(function (a, b) {
    console.log(`a = ${a.city}\nb = ${b.city}`);
  if (a.city.toLowerCase() > b.city.toLowerCase()) {
    return 1;
  }
  if (a.city.toLowerCase() < b.city.toLowerCase()) {
    return -1;
  }
  return 0;
});
return usersArr;
}
let users = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "Москва",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];