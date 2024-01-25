// Erstelle zwei Zufallszahl zwischen 0 und 100 
// Speichere diese jeweils in einer Variable 

let randomNumber = Math.random() * 100 + 0;
console.log(randomNumber);

let random = Math.floor(randomNumber);
console.log(random);

let randomNumber2 = Math.random() * 100 + 0;
console.log(randomNumber2);

let random2 = Math.floor(randomNumber2);
console.log(random2);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

let a = random;
let b = random2;

if ((a<b) && (a<50)) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
 

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 


if ((a<30) || (b<30)) {
    console.log("Eine der beiden ist kleiner als 30");
}

 
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 

if ((a<50) && (b!=50)) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}
