// TODO
// 1. Пользователь вводит названия городов через пробел.
// 	Вы присваиваете их переменной.
// 	Переставьте названия городов так, 
// 	чтобы они были упорядочены по алфавиту
let sortAbcBtn = document.querySelector("#sort-abc");
let city = document.querySelector("#city");
sortAbcBtn.addEventListener("click", function() {
    city.value = sortAbc(city.value.trim());
});

city.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            city.value = sortAbc(city.value.trim());
        }
    }
}

// 2. Найти все вхождения подстроки в строку.
// 	Строку и подстроку вводит пользователь
let findSubstringBtn = document.querySelector("#find-substring");
let substring = document.querySelector("#substring");
let string =  document.querySelector("#string");
findSubstringBtn.addEventListener("click", function() {
    console.log(findSubstring(string.value.trim(), substring.value.trim()));
});

substring.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            console.log(findSubstring(string.value.trim(), substring.value.trim()));
        }
    }
}
// 3. Определить, является ли заданная строка палиндромом или нет
let palindromTest = document.querySelector("#palindrom-test");
let palindrom = document.querySelector("#palindrom");
palindromTest.addEventListener("click", function() {
    console.log(isPalindrom(palindrom.value));
});

palindrom.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            console.log(isPalindrom(palindrom.value));
        }
    }
}

// 


function sortAbc(str) {
    let separator = str.includes(",") ? "," : " ";
    return findSubstring(str.toLowerCase(), separator, true).sort();
}

function findSubstring(str, sub, reverseFlag = false) {
    let startPosArr = [];
    let startPos;
    let result = [];
    // Находим массив начальных значений вхождения подстроки
    for (var i = 0; i < str.length; i++) {
        if (~(startPos = str.indexOf(sub, i))) {
            //Если вхождения подстроки есть, то начинаем поиск с (этого значения + длина подстроки) чтобы избежать повторений  
            i = startPos + sub.length - 1;
            startPosArr.push(startPos);
        }
    }

    if (!reverseFlag) {
        // Выделить из строки все вхождения подстроки
        for (var i = 0; i < startPosArr.length; i++) {
            result.push(str.slice(startPosArr[i], startPosArr[i] + sub.length));
        }
    } else {
        // Выделить из строки все кроме подстрок			
        result = str.split(sub).filter(element => ((elememt = element.trim()) !== ""));

    }

    return result;
}

function isPalindrom(str){
	// Приводим введенные данные к одной строку без пробелов
	let fullStr = arrayToString(findSubstring(str, " ", true)).toLowerCase();
	// разворачиваем строку, приводя ее к массиву и обратно 
	let reverseStr = arrayToString(stringToArray(fullStr).reverse());
	return(fullStr===reverseStr);
}
function arrayToString(arr){
	let str = "";
	 for (var i = 0; i < arr.length; i++) {
	 	str += arr[i];
	 }
	 return str;
}
function stringToArray(str){
	let result = [];
	for(let char of str){
		result.push(char);
	}
	return result;
}
