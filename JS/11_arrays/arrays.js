//Aufgabe 1 

//Erstelle ein Array mit folgenden Werten: 4,1,2,3 

let arr = [4, 1, 2, 3];
console.log(arr[2]);

//Füge die Werte 17 und 199 dazu 
arr.push(17);
arr.push(199);

//Gib alle Werte in einer Schleife aus! 
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

let sum = 0;

//Zähle alle Werte zusammen und gib das Ergebnis aus 
for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
    console.log(sum);
}

//Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
let sum1 = 0;
for (let index = 0; index < arr.length; index++) {
    sum1 = sum1 + arr[index];

    let Mittelwert = sum1 / arr.length;
    console.log(Mittelwert);
}


//Aufgabe 2 

//Erstelle ein Array mit folgenden Strings: 

//"Susi", "Paula", "Hans" 
let arr1 = ["Susi", "Paula", "Hans"];

//Gib folgenden Satz aus: 

//"Meine Freunde sind Susi, Paula und Hans 
console.log("Meine Freunde sind " + arr1.join(", ") + ".");

//Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten: 
arr1.push("Sepp");

//"Meine Freunde sind Susi, Paula, Hans und Sepp" 
console.log("Meine Freunde sind " + arr1.join(", ") + ".");
