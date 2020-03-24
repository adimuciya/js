// TODO
// 1. Пользователь вводит названия городов через пробел.
// 	Вы присваиваете их переменной.
// 	Переставьте названия городов так, 
// 	чтобы они были упорядочены по алфавиту
function sortAbc(str){
	let string = str.toLowerCase();
	for (var i = 0; i < string.length; i++) {
		
	}
}


// 2. Найти все вхождения подстроки в строку.
// 	Строку и подстроку вводит пользователь
function findSubstring(str, sub, reverseFlag = false){
	let startPosArr = [];
	let startPos = 0;
	let result = [];

	while(~str.indexOf(sub, startPos)){
		startPos = str.indexOf(sub, startPos);
		startPosArr.push(startPos);		
		startPos++;		
	}
	if (!reverseFlag) {
		// Выделить из строки все вхождения подстроки
		for (var i = 0; i < startPosArr.length; i++) {		
			result.push(str.slice(startPosArr[i], startPosArr[i] + sub.length));
		}	
	}else{
		// Выделить из строки все кроме подстрок
		result.push(str.slice(0,startPosArr[0]));
		for (var i = 0; i < startPosArr.length; i++) {			
			result.push(str.slice(startPosArr[i] + 1, startPosArr[i + 1]));
		}

	}
	
	
	return result;
}

// 3. Определить, является ли заданная строка палиндромом или нет