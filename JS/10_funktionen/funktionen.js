function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result);

function subtract(a, b) {
    return a - b;
}

let result2 = subtract(3, 5);
console.log(result2);

function multiply(a, b) {
    return a * b;
}

let result3 = multiply(3, 5);
console.log(result3);

function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

let result4 = supercalculation(3, 5);
console.log(result4);

function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = [(7 * A + 1) / 19];
    let M = (11 * A + 4 - B) % 29;
    let Q = (N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = Math.ceil(25 - M - W);


    if (P > 0) {
        console.log("Ostern ist am " + P + ". April");;
    } else {
        let date = P + 31;
        console.log("Ostern ist am " + date + ". März");
    }

}

printEasterDate(2024)