import { log } from "console";
import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
        });
    });
};

let balance = 0;

while (true) {
    console.log("1 einzahlen, 2 abheben, 3 kontostand, 4 beenden");
    let selection = await readLineAsync();
    if (selection == 1) {
        console.log("Wie viel möchten sie einzahlen?");
        let amount = await readLineAsync();
        console.log("einzahlen");
    }

    else if (selection == 2) {
        console.log("abheben");
    }

    else if (selection == 3) {
        console.log("kontostand" + balance);
    }

    else if (selection == 4) {
        console.log("beenden");
    }

    console.log("selection:", selection);
}