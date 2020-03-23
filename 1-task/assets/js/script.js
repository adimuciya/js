// Discount
let discount = document.querySelector("#discount");
discount.addEventListener("click", discountCalc);
let sum = document.querySelector("#sum");

sum.onfocus = function() {	
	this.onkeypress = function(event){
		if(event.key === "Enter"){
			discountCalc();			
		}
	}	
}

function discountCalc() {	
	if (sum.value !== "") {
		if (sum.value < 1000) {
			console.log("Сумма к оплате: " + sum.value + ", cкидка не предусмотрена");
		}else if (sum.value < 2000) {
			console.log("Сумма к оплате: " + sum.value * 0.95 + ", cкидка 5%");
		}else if (sum.value < 3000) {
			console.log("Сумма к оплате: " + sum.value * 0.9 + ", cкидка 10%");
		}else {
			console.log("Сумма к оплате: " + sum.value * 0.9 + ", cкидка 10% + подарок");
		}
	}
	else
		alert("Введите число");
}

// Времена года
let season = document.querySelector("#season");
season.addEventListener("click", seasonFind);
let month = document.querySelector("#month");

month.onfocus = function() {	
	this.onkeypress = function(event){
		if(event.key === "Enter"){
			seasonFind();			
		}
	}	
}

function seasonFind() {    
    switch (month.value) {
        case "Декабрь":
        case "декабрь":
        case "Январь":
        case "январь":
        case "Февраль":
        case "февраль":
            console.log("Зима");
            break;
        case "Март":
        case "март":
        case "Апрель":
        case "апрель":
        case "Май":
        case "май":
            console.log("Весна");
            break;
        case "Июнь":
        case "июнь":
        case "Июль":
        case "июль":
        case "Август":
        case "август":
            console.log("Лето");
            break;
        case "Сентябрь":
        case "сентябрь":
        case "Октябрь":
        case "октябрь":
        case "Ноябрь":
        case "ноябрь":
            console.log("Осень");
            break;
        default:
            alert("Введите месяц");
    }
}

// Задача про число
let guess = document.querySelector("#guess");
guess.addEventListener("click", guessNum);

function guessNum(){
	let number = Math.floor(Math.random()*7) + 1;
	let userData;
	while(parseInt(userData) !== number){
		userData = prompt("Введите число или \"0\" для выхода");
		if (!parseInt(userData)) {
			break;
		} 
		if (parseInt(userData) === number){
			alert("Вы угадали!!!");
		}
	}
}

// Задача про массив
let find = document.querySelector("#find");
find.addEventListener("click", findSum);
let length = document.querySelector("#arr");

length.onfocus = function() {	
	this.onkeypress = function(event){
		if(event.key === "Enter"){
			findSum();			
		}
	}	
}

function findSum() {
	let arr = getArray(length.value);
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 7) {
				result.push(arr[i] + " + " + arr[j] + " = 7");
			}
		}
	}
	if (!result.length) {
		printArr(arr);
		console.log("Совпадений не найдено");
	} else{
		printArr(arr);
		console.log("*************")
		printArr(result);
	}
}

function getArray(num){
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(Math.floor(Math.random()*10) + 1);
	}
	return arr;
}

function printArr(arr){
	for (let i = 0; i < arr.length; i++) {
		console.log("arr[" + i + "] = " + arr[i]);
	}
}