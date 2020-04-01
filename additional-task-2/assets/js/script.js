// Дополнительные задачи №2 (строки и массивы)

// 1. Даны 2 слова, состоящие из четного числа букв. Получить слово состоящее
// из первой половины первого слова и второй половины второго слова.

// 2. Найдите самое длинное слово в предложении, при условии,
// что в предложении все слова разной длины.


// 3. Дана строка, которая содержит буквы и числа, например, 
// "улица Ломоносова дом 9 корпус 1 офис 1120".
// Необходимо создать массив, элементы которго будут числа строки,
// например для данной строки массив будет вида [9, 1, 1120]

// 4. Задача на массив
// Содать двумерный массив из 3 вложенных массивов, 
// в каждом вложенном массиве по 6 целых чисел
// Массив заполнить вручную: 
// например,
//     let someArr = [
//           [5, 6, 12, -90, 9, 0], // 6 элементов
//           [34, 67, 45, -40, 10, 98], // 6 элементов
//           [-77, 88, 99, -99, 1, 3], // 6 элементов
//       ];
// или случайными (random) числами из отрезка [-99; 99].
// Вывести массив в консоль.
// Определить и вывести на экран индекс строки с наибольшим по модулю произведением элементов.
// Если таких строк несколько, то вывести индекс первой встретившейся из них.

// 5. Задача на одномерный массив
// Создайте массив из 11 случайных целых чисел из отрезка [-1;1], выведите массив в консоль.
// Определите какой элемент встречается в массиве чаще всего и выведите об этом в консоль.
// Если несколько элементов встречаются одинаковое количество раз, то не выводите ничего.

// 1. Даны два слова...
let twoWordsGo = document.querySelector("#two-words-go");
let twoWords = document.querySelector("#two-words");
twoWordsGo.addEventListener("click", function() {
    if (twoWords.value) {
        let arrOfTwo = wordsFromSentence(twoWords.value);
        arrOfTwo.splice(2, arrOfTwo.length - 2);
        if (!(arrOfTwo[0].length % 2) && !(arrOfTwo[1].length % 2) && arrOfTwo[1]) {
            console.log(twoWordsMake(arrOfTwo));
        } else {
            alert("Введите корректные данные");
        }
    } else {
        alert("Введите данные");
    }
});

twoWords.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            if (twoWords.value) {
                let arrOfTwo = wordsFromSentence(twoWords.value);
                arrOfTwo.splice(2, arrOfTwo.length - 2);
                if (!(arrOfTwo[0].length % 2) && !(arrOfTwo[1].length % 2) && arrOfTwo[1]) {
                    console.log(twoWordsMake(arrOfTwo));
                } else {
                    alert("Введите корректные данные");
                }
            } else {
                alert("Введите данные");
            }
        }
    }
}

// 2. Длинное слово в предложениии
let longwordInSentence = document.querySelector("#longword-in-sentence");
let longwordInSentenceGo = document.querySelector("#longword-in-sentence-go");
longwordInSentenceGo.addEventListener("click", function() {
    if (longwordInSentence.value) {
        console.log("Самые длинные слова в предложении:");
        printMatrix(longwordFind(wordsFromSentence(longwordInSentence.value)));
    } else {
        alert("Введите данные");
    }

});

longwordInSentence.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            if (longwordInSentence.value) {
                console.log("Самые длинные слова в предложении:");
                printMatrix(longwordFind(wordsFromSentence(longwordInSentence.value)));
            } else {
                alert("Введите данные");
            }
        }
    }
}

// 3. Выделение всех чисел в строке
let numbersInSentence = document.querySelector("#numbers-in-sentence");
let numbersInSentenceGo = document.querySelector("#numbers-in-sentence-go");
numbersInSentenceGo.addEventListener("click", function() {
    if (numbersInSentence.value) {
        console.log(`Все цифры в предложении "${numbersInSentence.value}":`);
        printMatrix(wordsFromSentence(numbersInSentence.value, false));
    } else {
        alert("Введите данные");
    }

});

numbersInSentence.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            if (numbersInSentence.value) {
                console.log(`Все цифры в предложении "${numbersInSentence.value}":`);
                printMatrix(wordsFromSentence(numbersInSentence.value, false));
            } else {
                alert("Введите данные");
            }
        }
    }
}

// 4. Что-то про матрицы и произведения
let matrixComp = document.querySelector("#matrix-comp");
let col = document.querySelector("#col");
let row = document.querySelector("#row");
matrixComp.addEventListener("click", function() {
    if (!parseInt(col.value) || !parseInt(row.value)) {
        alert("Введите значения");
    } else {
        let matrix = getMatrix(parseInt(Math.floor(col.value)), parseInt(Math.floor(row.value)));
        printMatrix(matrix);
        console.log(findIndexOfComp(matrix));
    }

});

// 5. Что-то про нули и единицы
let zeroOneArr = document.querySelector("#zero-one-arr");
zeroOneArr.addEventListener("click", function() {
    let arr = getMatrix(11);
    printMatrix(arr);
    let minusOneCouner = 0;
    let zeroCounter = 0;
    let oneCounter = 0;
    arr.forEach(function(elem) {
        if (elem === -1) { minusOneCouner++; }
        if (elem === 0) { zeroCounter++; }
        if (elem === 1) { oneCounter++; }
    });
    if (minusOneCouner > zeroCounter && minusOneCouner > oneCounter) { console.log(`-1 повторяется ${minusOneCouner} раз`); }
    if (oneCounter > zeroCounter && minusOneCouner < oneCounter) { console.log(`1 повторяется ${oneCounter} раз`); }
    if (minusOneCouner < zeroCounter && zeroCounter > oneCounter) { console.log(`0 повторяется ${zeroCounter} раз`); }
    console.log(`'-1': ${minusOneCouner}, '0': ${zeroCounter}, '1': ${oneCounter}`);
});

// Функции
// Слово из двух половин
function twoWordsMake(arrOfTwo) {
    let firstHalf = arrOfTwo[0].slice(0, arrOfTwo[0].length / 2);
    let secondHalf = arrOfTwo[1].slice(arrOfTwo[1].length / 2, arrOfTwo[1].length);
    return firstHalf + secondHalf;
}

// Поиск самых длинных слов в строке
function longwordFind(arr) {
    let maxWord = arr[0];
    let maxWordArr = [];
    for (let i = 1; i < arr.length; i++) {
        if (maxWord.length < arr[i].length) {
            maxWord = arr[i];
        }
    }
    maxWordArr.push(maxWord);
    for (let i = 0; i < arr.length; i++) {
        if (maxWord.length === arr[i].length && maxWord !== arr[i]) {
            maxWordArr.push(arr[i]);
        }
    }
    return maxWordArr;
}

//Выделение слов или чисел из строки 
function wordsFromSentence(str, numberFlag = true) {
    let regExp = (numberFlag) ? /[\p{Z}\p{P}\p{M}\p{S}\p{N}]/u : /[\p{Z}\p{P}\p{M}\p{S}\p{L}]/u;
    return str.split(regExp).filter(e => e !== "");
}

// Создание матрицы или массива заданных размеров
function getMatrix(col, row = 1) {
    let matrix = [];
    if (row === 1) {
        for (let i = 0; i < col; i++) {
            // Для массива из 5 задания           
            matrix.push(Math.floor(Math.random() * 3 - 1));
        }
    } else {
        for (let i = 0; i < row; i++) {
            matrix[i] = [];
            for (let j = 0; j < col; j++) {
                matrix[i][j] = Math.floor(Math.random() * 200) - 99;
            }
        }
    }
    return matrix;
}

// Поиск произведений строк в матрице
function findIndexOfComp(matrix) {
    let result = "";
    let maxComp = 1;
    let maxIndex = 0;
    if (Array.isArray(matrix[0])) {
        for (let i = 0; i < matrix.length; i++) {
            let comp = 1;
            for (let j = 0; j < matrix[i].length; j++) {
                comp *= Math.abs(matrix[i][j]);
            }
            if (comp > maxComp) {
                maxComp = comp;
                maxIndex = i;
            }
            // console.log(`comp [${i}] = ${comp}`);
        }
        result = `Строка ${maxIndex} с максимальным произведением ${maxComp}`;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            maxComp *= matrix[i];
        }
        result = `Произведение чисел в массиве ${maxComp}`;
    }

    return result;
}

// Вывод матрицы или массива в консоль
function printMatrix(matrix) {
    if (Array.isArray(matrix[0])) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                console.log(`Matrix [${i}][${j}] = ${matrix[i][j]}`);
            }
        }
    } else {
        for (let i = 0; i < matrix.length; i++) {
            console.log(`Array [${i}] = ${matrix[i]}`);
        }
    }
}