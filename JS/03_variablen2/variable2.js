// Erstelle eine Variable banana mit dem Wert "Banane" 
let banana = "Banane";

// Erstelle eine Variable apple mit dem Wert "Apple" 
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14 
let bananaPricePerKilo = 2.14;

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43 
let applePricePerKilo = 3.43;


// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo 
let gewichtappleperkilo = 1/0.34;

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo 
let gewichtbananaperkilo = 1/0.22;

 
// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel 
console.log("Apple per Kilo: ", gewichtappleperkilo);
console.log("Banane per Kilo: ", gewichtbananaperkilo);

console.log("Apple Price per Kilo " + applePricePerKilo / gewichtappleperkilo + "€");
console.log("Banana Price per Kilo " + bananaPricePerKilo / gewichtbananaperkilo + "€");

// Preis 1 Apfel berechnen
let oneApple = applePricePerKilo / gewichtappleperkilo;

// Preis 1 Banane berechnen
let oneBanana = bananaPricePerKilo / gewichtbananaperkilo;


// Preis von 8 Äpfeln 
console.log("Price 8 apples " + oneApple * 8 + "€");

// Preis von 17 Bananen
console.log("Price 17 bananas " + oneBanana * 17 + "€");

// Preis von 1 Tonne Äpfel 
console.log("Price of 1 Tons of Apples " + applePricePerKilo * 1000 + "€");

// Preis von 1 Tonne Bananen 
console.log("Price of 1 Tons of Bananas " + bananaPricePerKilo * 1000 + "€");