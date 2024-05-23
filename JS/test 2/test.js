// // NImm alle positiven Zahlen und berechne den Mittelwert
// // Ausserdem gib die Summe der negativen Zahlen aus
// //
let result = 0;
const data3 = "4,9,-3,-9,-5,10,2,1,14";

let array = data3.split(",");
let sum = 0;
let amount = 0;
for (let index = 0; index < array.length; index++) {
    let number = parseInt(array[index]);
    console.log(number);
    if (number > 0) {
        sum += number;
        amount++;
    }
}
let average = sum / amount;
console.log(average);

//Suche alle geraden Zahlen (modulo) und berechne den Mittelwert dieser
// (4 + 10 + 2 + 14) / 4

const data1 = "4,9,-3,-9,-5,10,2,1,14";
const number1 = data1.split(",");

let counter = 0;
for (let index = 0; index <= 14; index++) {
    if (index % 2 == 0) {
        counter = counter + index;
        console.log(index);
    }
}
console.log(counter);

let Mittelwert = counter / 14;
console.log(Mittelwert);

//Gib den Satz rückwärts aus und verdopple jeden Buchstaben
const data2 = "Das Leben ist schön";
console.log(data2);
let text = data2.split("");
for (let i = 0; i <= text.length; i++) {
    if (text[i] == "D") {
        text[i] = "DD";
    }

    if (text[i] == "a") {
        text[i] = "aa";
    }

    if (text[i] == "s") {
        text[i] = "ss";
    }

    if (text[i] == "L") {
        text[i] = "LL";
    }

    if (text[i] == "e") {
        text[i] = "ee";
    }

    if (text[i] == "b") {
        text[i] = "bb";
    }

    if (text[i] == "n") {
        text[i] = "nn";
    }

    if (text[i] == "i") {
        text[i] = "ii";
    }

    if (text[i] == "t") {
        text[i] = "tt";
    }

    if (text[i] == "c") {
        text[i] = "cc";
    }

    if (text[i] == "h") {
        text[i] = "hh";
    }

    if (text[i] == "ö") {
        text[i] = "öö";
    }

    if (text[i] == "n") {
        text[i] = "nn";
    }
}

let Ergebnis = "";
for (let i = 0; i < text.length; i++) {
    Ergebnis = Ergebnis + text[i];
}
console.log(Ergebnis);


//Zähle wie oft a oder e oder ö vorkommen
// 4
const data4 = "Das Leben ist schön";

let count = 0;
for (let index = 0; index < data4.length; index++) {
    const text = data4[index];

    if (text === "a" || text === "e" || text === "ö") {
        count++;
    }
}
console.log(count);