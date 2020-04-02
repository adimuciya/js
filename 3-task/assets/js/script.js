let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

/*
Задача 1
Даны переменные from и to, значения переменных вводит пользователь через prompt.
Пользователь должен вводить числа.
Но если пользователь вводит не числа, его нужно попросить повторить ввод, пользователь может ввести exit для выхода.
На основе объекта goods создать новый объект с товарами,
цены которых лежат в диапазоне от значения from до значения to*/

let from = document.querySelector("#from");
let to = document.querySelector("#to");
let fromToFind = document.querySelector("#from-to-find");
fromToFind.addEventListener("click", function(){
    if(to.value){
        if (!from.value) {
            from.value = 0;
        }
        let goodsFromTo = {};
        for(let prop in goods){
            if (goods[prop].price >= parseInt(from.value) && goods[prop].price <= parseInt(to.value)) {
                goodsFromTo[prop] = goods[prop];
            }
        }
        console.log(goodsFromTo);
    }else{
        alert("Введите данные");
    }
});

/*
Задача 2
Даны 2 переменные title и countToCart (значения переменных вводит пользователь через prompt).
Необходимо найти товар с указанным названием (title):
если количество позволяет, то уменьшить количество товара в объекте goods на countToCart,
если не позволяет, то вывести информацию об этом в консоль
 */

let title = document.querySelector("#title");
let countToCart = document.querySelector("#count-to-cart");
let buy = document.querySelector("#buy");
buy.addEventListener("click", function(){
    if (title.value && countToCart.value) {

        // ПОЧЕМУ ЭТОТ ЛОГ ВЫВОДИТ УЖЕ ИЗМЕНЕННЫЙ В ЦИКЛЕ ОБЪЕКТ????
        console.log("**************");
        console.log(goods);
        console.log("**************");
        // ПОЧЕМУ ЭТОТ ЛОГ ВЫВОДИТ УЖЕ ИЗМЕНЕННЫЙ В ЦИКЛЕ ОБЪЕКТ????

        for(let prop in goods){
            if (title.value.trim().toLowerCase() === goods[prop].title.toLowerCase()) {
                if (parseInt(countToCart.value) <= goods[prop].count ) {
                    // ТО ЕСТЬ ЛОГ ВЫВОДИТСЯ ПОСЛЕ ВЫПОЛНЕНИЯ ЭТОЙ ОПЕРАЦИИ
                    goods[prop].count -= parseInt(countToCart.value);
                }else{
                    console.error("Не хватает товара");
                }
            }
        }
    }else{
        alert("Введите данные");
    }
});

/*
Задача 3
Дана переменная author (значение переменной вводит пользователь через prompt).
На основе массива books создать новый массив, в который войдут все книги указанного автора,
если такого автора нет, вывести информацию в консоль
*/

let author = document.querySelector("#author");
let booksFind = document.querySelector("#books-find");
booksFind.addEventListener("click", function(){
    if (author.value) {
        let singleAuthor = [];
        books.forEach(function(elem){
            if (elem.author.toLowerCase() === author.value.trim().toLowerCase()) {
                singleAuthor.push(elem);
            }
        });
        if (singleAuthor.length) {
            console.log(singleAuthor);
        }
        else{
            console.log("Автор не найден");
        }
    }else{
        alert("Введите данные");
    }
    
});