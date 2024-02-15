//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren):  

//X X X X
//O O O O  
//X X X X  
//O O O O  

for (let index = 0; index <= 3; index++) {
    if (index % 2 == 0) {
        console.log("XXXX");
    }
    else {
        console.log("OOOO");
    }
}

 //2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)
let counter = 0;
for (let index = 1; index < 100; index++) {
    if (index % 2 == 0) {
        counter = counter + index;
        console.log(index);
    }    
}
console.log(counter);

