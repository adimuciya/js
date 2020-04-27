let number = document.querySelector("#field-size");
let runJs = document.querySelector("#run");
let fieldContainer = document.querySelector(".field");
fieldContainer.setAttribute("data-counter", 0);
runJs.addEventListener("click", initField);
fieldContainer.addEventListener("click", initGame);

// Инициализация игрового поля
function initField() {
    if (!number.value && parseInt(number.value) < 3) {
        alert(`Введите число >= 3`);
    } 

    else {
        generateField(parseInt(number.value), fieldContainer);
        this.removeEventListener("click", initField);
        this.parentElement.classList.add("d-none")
    }
}

// Инициализация игры
function initGame(event) {
    let clickElem = event.target;
    this.dataset.counter++;

    if (clickElem.dataset.prize) {
        clickElem.classList.add("win");
        clickElem.innerText = clickElem.dataset.prize;        
        this.removeEventListener("click", initGame);
        alert("Вы выиграли!");
    } 

    else if (parseInt(this.dataset.counter) === 5) {
        this.removeEventListener("click", initGame);
        alert("Вы проиграли!");
    }

    else { console.log(`Попыток осталось: ${5 - parseInt(this.dataset.counter)}.`) }    
}

// получение объекта
function getPrize() {
    return {
        cat: "Кот",
        book: "Книга",
        car: "Машина"
    };
}

// Создаем мап вида "случайное число" => "приз"
function createPrizeMap(prizeObj, randomArr) {
    let prizeMap = new Map();
    for (let i = 0; i < randomArr.length; i++) {
        prizeMap.set(randomArr[i], Object.getOwnPropertyNames(prizeObj)[i]);
    }
    return prizeMap;
}

// создаем массив из 3х неповторяющихся чисел
// Есть вопрос по поводу того как создать массив заданного 
// размера из неповторяющихся элементов
function generateRandomArr(range) {
    let arr = [];
    let randomNum_1 = Math.floor(Math.random() * range * range);
    let randomNum_2 = Math.floor(Math.random() * range * range);
    let randomNum_3 = Math.floor(Math.random() * range * range);

    while (randomNum_1 === randomNum_2 || randomNum_1 === randomNum_3 || randomNum_2 === randomNum_3) {
        randomNum_1 = Math.floor(Math.random() * range * range);
        randomNum_3 = Math.floor(Math.random() * range * range);
        randomNum_2 = Math.floor(Math.random() * range * range);
    }

    arr.push(randomNum_1);
    arr.push(randomNum_2);
    arr.push(randomNum_3);
    return arr;
}


// генерация игрового поля
function generateField(num, fieldContainer) {
    let flex = `${100/num}%`;
    let height = `${100/num}%`;
    let map = createPrizeMap(getPrize(), generateRandomArr(num));

    for (let i = 0; i < num * num; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.flex = flex;
        cell.style.height = height;

        if (map.get(i)) {
            cell.setAttribute("data-prize", map.get(i));
        }

        fieldContainer.append(cell);
    }
}
// прочитать про опшонс в аддЕвентЛистенер