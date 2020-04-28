// Data
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', count: 2},
    {author: 'Толстой', title: 'Война и мир', count: 0},
    {author: 'Лермонтов', title: 'Тамань', count: 3},
    {author: 'Гончаров', title: 'Обломов', count: 10}
];

let jsonFromServer = `[{"name":"Люся","age":"1 год","color":"трехцветная","additional_info":{"vaccinations":true,"passport":true}},{"name":"Том","age":"3 месяца","color":"белый","additional_info":{"vaccinations":false,"passport":false}},{"name":"Макс","age":2,"color":"серый","additional_info":{"vaccinations":false,"passport":true}},{"name":"Василий","age":3,"color":"черный","additional_info":{"vaccinations":true,"passport":true}}]`;
let objFromJson = JSON.parse(jsonFromServer);

// задача на вывод книг
// вывести информацию о товаре
// Название
// Автор
// - 10 +
// если количество 0 -> [- 0 +] нельзя нажать на + и -
// при нажатии на + количество увеличивается (но не больше количества),
// при нажатии на - уменьшается (но не меньше 0)
// Дополнительно: можно ввести количество с клавиатуры
let goodsCounter = {
	init: function(id, booksArr){
		this.goodsContainer = document.querySelector("#books");
		this.books = booksArr;

		for (let i = 0; i < this.books.length; i++) {
			let authorContainer = document.createElement("div");
			authorContainer.classList.add("author-container");

			let author = document.createElement("h3");
			author.innerText = this.books[i].author;
			author.classList.add("author");
			authorContainer.append(author);

			let title = document.createElement("h4");
			title.innerText = this.books[i].title;
			title.classList.add("title")
			authorContainer.append(title);

			let minusButton = document.createElement("input");
			minusButton.setAttribute("type", "button");
			minusButton.value = "-";
			minusButton.classList.add("minus-button");
			authorContainer.append(minusButton);

			let numberInput = document.createElement("input");
			numberInput.setAttribute("type", "number");			
			numberInput.value = 0;
			numberInput.setAttribute("data-count", this.books[i].count);
			numberInput.classList.add("number-input");
			authorContainer.append(numberInput);

			let plusButton = document.createElement("input");
			plusButton.setAttribute("type", "button");
			plusButton.value = "+";
			plusButton.classList.add("plus-button");
			authorContainer.append(plusButton);				

			this.goodsContainer.append(authorContainer);
		}

		this.plusButtons = document.querySelectorAll(".plus-button");
		this.numberInputs = document.querySelectorAll(".number-input");
		this.minusButtons = document.querySelectorAll(".minus-button");				
	},

	plusButtonListener: function(){
		let inputNumber = this.previousElementSibling;
		parseInt(inputNumber.value) < parseInt(inputNumber.dataset.count) ?
			 inputNumber.value++ : inputNumber.value = inputNumber.dataset.count;
	},

	minusButtonListener: function(){
		let inputNumber = this.nextElementSibling;
		parseInt(inputNumber.value) <= 0 ?
			 inputNumber.value = 0 : inputNumber.value--;
	},

	numberInputListener: function(){		
		parseInt(this.value) <= 0 ? 
			this.value = 0 : parseInt(this.value) > parseInt(this.dataset.count) ?
				this.value = this.dataset.count : this.value = this.value;
	},

	initListeners: function(){
		for(let elem of this.plusButtons){
			elem.addEventListener("click", this.plusButtonListener);
		}
		for(let elem of this.numberInputs){
			elem.addEventListener("input", this.numberInputListener);
		}
		for(let elem of this.minusButtons){
			elem.addEventListener("click", this.minusButtonListener);
		}
	}

}

goodsCounter.init(document.querySelector("#books"), books);
goodsCounter.initListeners();

// задание на вывод данных
// вывод информации по массиву объектов
// вывести информацию по каждой кошке
// Имя кошки | возраст
// картинка       Дополнительная информация:
//                Цвет:  цвет кошки
//                Документы: да / нет
//                Прививик: да / нет

// работа с таблицами
// let tableArea = document.getElementById("table");
// let table = document.createElement("table");
// table.setAttribute("border", 1);

// заголовок
// let caption = table.createCaption();
// caption.innerText = "Заголовок таблицы";

// ряд
// let row = table.insertRow(0);

// ячейки
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);

// cell1.innerText = "Cell 1";
// cell2.innerText = "Cell 2";

// tableArea.append(table);
class Table{

	constructor(objArr, tableField){
		this.objArr = objArr;
		this.tableField = tableField
	}

	createTable(){
		let table = document.createElement("table");
		table.setAttribute("border", 1);
		let firstRow = table.insertRow(0);
		let counter = 0;
		for(let elem in this.objArr[0]){
			firstRow.insertCell(counter).innerText = elem;
			counter++;
		}
		for(let i = 0; i < this.objArr.length; i++){
			let row = table.insertRow(i+1);
			counter = 0;
			for(let elem in this.objArr[i]){
				row.insertCell(counter).innerText = this.objArr[i][elem];
				counter++;
			}
		}
		this.table = table;
		this.tableField.append(table);
	}
	sort(){
		
	}
}