
// 1. Суммв цифр числа
let findSum = document.querySelector("#find-sum");
let number = document.querySelector("#number");
findSum.addEventListener("click", function() {
    if(number.value){
        console.log(`Сумма цифр в числе ${Math.floor(number.value)}: ${sumNumbers(Math.floor(number.value) + '')}`);
    }else{
        alert("Введите значение");        
    }
    
    
});

number.onfocus = function() {
    this.onkeypress = function(event) {
        if (event.key === "Enter") {
            if(number.value){
                console.log(`Сумма цифр в числе ${Math.floor(number.value)}: ${sumNumbers(Math.floor(number.value) + '')}`);
             }else{
                alert("Введите значение");        
            }
        }
    }
}

// 2. Попадание случайного числа в интервал (25;100)
let randomNumber = document.querySelector("#random-number");
randomNumber.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random()*118 + 5)
    if (interval(randomNumber)) {
        console.log(`Число ${randomNumber} попало в интервал (25;100)`);
    }else{
        console.log(`Число ${randomNumber} не попало в интервал (25;100)`);
    }
});

// 3. Создание, вывод, и поиск максимального минимального и среднего элемента в двумерном или одномерном массиве
let minMaxEl = document.querySelector("#min-max-el");
let col =  document.querySelector("#col");
let row = document.querySelector("#row");
minMaxEl.addEventListener("click", function(){
    if (!parseInt(col.value) || !parseInt(row.value)) {
        alert("Введите значения");
    }else{        
        let matrix = getMatrix(parseInt(Math.floor(col.value)), parseInt(Math.floor(row.value)));
        printMatrix(matrix);
        console.log(findMinMaxElement(matrix));
    }
	
});

// 4. Задача про два массива
let lengthArr = document.querySelector("#length");
let twoArr = document.querySelector("#two-arr");
twoArr.addEventListener("click", function(){
    if (lengthArr.value < 3) {
                alert("Введите число больше чем 2");
            }
            else{
                let arr = getMatrix(parseInt(lengthArr.value));
                console.log("Начальный массив");
                printMatrix(arr);
                console.log("Четный массив");
                printMatrix(evenArr(arr));
            }
});
lengthArr.onfocus = function(){
    this.onkeypress = function(event){
        if (event.key === "Enter") {
            if (this.value < 3) {
                alert("Введите число больше чем 2");
            }
            else{
                let arr = getMatrix(parseInt(lengthArr.value));
                console.log("Начальный массив");
                printMatrix(arr);
                console.log("Четный массив");
                printMatrix(evenArr(arr));
            }
        }
    }
}

// Функции
// Попадание числа в интервал
function interval(number, start = 25, end = 100){
    return ((number > start)&&(number < end));
}

// Сумма цифр в числе
function sumNumbers(number){
    let numberArr = number.split('');
    let numberArrSum = 0;    
    if (numberArr[0]==="-") {
        numberArr.splice(0,1);
    }
    for (let i = 0; i < numberArr.length; i++) {
        numberArrSum += parseInt(numberArr[i]);
    }
    return numberArrSum;
}

// Создание матрицы или массива заданных размеров
function getMatrix(col, row = 1) {
    let matrix = [];
    if (row === 1) {
        for (let i = 0; i < col; i++) {
            matrix.push(Math.floor(Math.random() * (col + 1)));
        }
    }
    else{
        for (let i = 0; i < row; i++) {
            matrix[i] = []; 
            for (let j = 0; j < col; j++) {
                matrix[i][j] = Math.floor(Math.random() * 200) - 99;
                // matrix[i][j] = Math.floor(Math.random()*15);
            }
        
        }
    }    
    return matrix;
}
// Поиск максимального, минимального и среднего значения
function findMinMaxElement(matrix){
    let result = "";
    if (Array.isArray(matrix[0])) {
        let max = matrix[0][0];
        let min = matrix[0][0];
        let maxStr = `Max element = matrix [0][0] = ${matrix[0][0]}`;
        let minStr = `Min element = matrix [0][0] = ${matrix[0][0]}`;;
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] > max){
                    max = matrix[i][j];
                    maxStr = `Max element = matrix [${i}][${j}] = ${matrix[i][j]}`;
                }
                if (matrix[i][j] < min) {
                    min = matrix[i][j];
                    minStr = `Min element = matrix [${i}][${j}] = ${matrix[i][j]}`;
                }
                sum += matrix[i][j];
            }
        }
        result = maxStr + "\n" + minStr + "\n" + `Arithmetical mean = ${sum / (matrix.length * matrix[0].length)}`;
    }
    else{
        let max = matrix[0];
        let min = matrix[0];
        let maxStr = `Max element = array [0] = ${matrix[0]}`;
        let minStr = `Min element = array [0] = ${matrix[0]}`;;
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            if(matrix[i] > max){
                max = matrix[i];
                maxStr = `Max element = array [${i}] = ${matrix[i]}`;
            }
            if (matrix[i] < min) {
                min = matrix[i];
                minStr = `Min element = array [${i}] = ${matrix[i]}`;
            }
            sum += matrix[i];            
        }
        result = maxStr + "\n" + minStr + "\n" + `Arithmetical mean = ${sum / matrix.length}`;
    }
	
	return result;
}

// Создание массива из четных элементов массива
function evenArr(arr){
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}
// Вывод матрицы или массива в консоль

function printMatrix(matrix) {
    if (Array.isArray(matrix[0])) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                console.log(`Matrix [${i}][${j}] = ${matrix[i][j]}`);
            }
        } 
    }else{
        for (let i = 0; i < matrix.length; i++) {
            console.log(`Array [${i}] = ${matrix[i]}`);
        }
    }
    
}

