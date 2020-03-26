// TODO
// 1. Пользователь вводит названия городов через пробел.
// 	Вы присваиваете их переменной.
// 	Переставьте названия городов так, 
// 	чтобы они были упорядочены по алфавиту
let sortAbcBtn = document.querySelector("#sort-abc");
let city = document.querySelector("#city");
sortAbcBtn.addEventListener("click", function() {
    city.value = sortAbc(city.value.trim()).join(" ");
});

city.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            city.value = sortAbc(city.value.trim()).join(" ");
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

// Создание, вывод, и поиск максимального элемента в двумерном массиве
let maxEl = document.querySelector("#max-el");
let col =  document.querySelector("#col");
let row = document.querySelector("#row");
maxEl.addEventListener("click", function(){
	let matrix = getMatrix(parseInt(col.value), parseInt(row.value));
	printMatrix(matrix);
	console.log(findMaxElement(matrix));
});

// Первая буква .toUpperCase()
let firstLetterString = document.querySelector("#first-letter-string");
let firstLetterBtn = document.querySelector("#first-letter");
firstLetterBtn.addEventListener("click", function(){
	let tmp = firstLetterString.value.trim().split("");
	tmp[0] = tmp[0].toUpperCase();	
	firstLetterString.value = arrayToString(tmp);
});

firstLetterString.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            let tmp = firstLetterString.value.trim().split("");
			tmp[0] = tmp[0].toUpperCase();	
			firstLetterString.value = arrayToString(tmp);
        }
    }
}
// Удаление элементов
let remove = document.querySelector("#remove");
remove.addEventListener("click", function(){
	let arr = getMatrix(10);
	console.log("****************");
	printMatrix(arr);
	arr[0].forEach(function(element, index, array){
		if(element === 5){
			console.log(`index = ${index} element = ${element}`);
			arr[0].splice(index, 1);
		}
			
	});
	console.log("****************");
	printMatrix(arr);
});

// Функции
// Сортировка слов в строке по алфавиту
function sortAbc(str) {
    let separator = str.includes(",") ? "," : " ";
    return findSubstring(str.toLowerCase(), separator, true).sort();
}

// Функция выделения подстроки
function findSubstring(str, sub, reverseFlag = false) {
    let startPosArr = [];
    let startPos;
    let result = [];
    // Находим массив начальных значений вхождения подстроки
    for (let i = 0; i < str.length; i++) {
        if (~(startPos = str.indexOf(sub, i))) {
            //Если вхождения подстроки есть, то начинаем поиск с (этого значения + длина подстроки) чтобы избежать повторений  
            i = startPos + sub.length - 1;
            startPosArr.push(startPos);
        }
    }

    if (!reverseFlag) {
        // Выделить из строки все вхождения подстроки
        for (let i = 0; i < startPosArr.length; i++) {
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
	 for (let i = 0; i < arr.length; i++) {
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

function getMatrix(col, row = 1) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
    	matrix[i] = []; 
    	for (let j = 0; j < col; j++) {
    		// matrix[i][j] = Math.floor(Math.random() * 200) - 99;
    		matrix[i][j] = Math.floor(Math.random()*15);
    	}
        
    }
    return matrix;
}
function findMaxElement(matrix){
	let max = matrix[0][0];
	let maxStr = "";
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if(matrix[i][j] > max){
				max = matrix[i][j];
				maxStr = `Max element = matrix [${i}][${j}] = ${matrix[i][j]}`
			}
		}
	}
	return maxStr;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
    	for (let j = 0; j < matrix[i].length; j++) {
    		console.log(`Matrix [${i}][${j}] = ${matrix[i][j]}`);
    	}
    }
}

