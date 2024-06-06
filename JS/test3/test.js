//Gib jedes zweite Wort, verdopple jeden Buchstaben und ersetze
//Leerzeichen mit _

const data2 = "Das Leben ist schön"
let text = data2.split(" ");


const result = array.join("_");
console.log(result);




//Suche alle negativen, geraden Zahlen (modulo) und berechne den Mittelwert dieser

// (-4 + -2) / 2

const data1 = "4,9,-3,-9,-5,10,2,1,14,-4,-2";
const numbers = data1.split(",").map(Number);

let sum = 0;
let amount = 0;

for (let number of numbers) {
    if (number < 0 && number % 2 === 0) {
        sum += number;
        amount++;
    }
}

const average = sum / amount;
console.log(average);
