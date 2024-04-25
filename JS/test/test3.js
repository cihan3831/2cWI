const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
//Berechne den Mittelwert der Temperaturen der beiden Wochen

//Gib aus
//Mittelwert Woche 1 : xxx
let sum1 = 0;
for (let index = 0; index < temperaturesWeek1.length; index++) {
    sum1 = sum1 + temperaturesWeek1[index];

    let Mittelwert = sum1 / temperaturesWeek1.length;
    console.log("Mittelwert der Woche 1 : " + temperaturesWeek1);
}

//Mittelwert Woche 2 : xxx
let sum2 = 0;
for (let index = 0; index < temperaturesWeek2.length; index++) {
    sum2 = sum2 + temperaturesWeek2[index];

    let Mittelwert = sum1 / temperaturesWeek2.length;
    console.log("Mittelwert der Woche 2 : " + temperaturesWeek2);
}
//"Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"
