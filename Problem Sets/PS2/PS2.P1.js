

function * fibs() {
    let num1 = 0;
    let num2 = 1;
    while(true) {
        yield num1;
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
}

function * even() {
    const gen = fibs();
    while (true) {
        const nextNum = gen.next().value;
        if (nextNum % 2 === 0) {
            yield nextNum;
        }
    }
}

const evenGen = even();
let rounds = 6;
while (rounds --> 0) {
    console.log(evenGen.next().value);
}