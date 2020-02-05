/*need to return function
*
* doEval('8+2') <- returns a function that accepts a string
* doEval('8+2')('8+2') <-
*
* const doEval = (statement) => {
*   someString => someString.reverse()
* }
*
* NEED A SWITCH STATEMENT*/


const evaluate =  expr => {
    if (expr.includes('+')) {
        return (left, right) => {return left + right};
    }
    else if (expr.includes('-')) {
        return (left, right) => {return left - right};
    }
    else if (expr.includes('*')) {
        return (left, right) => {return left * right};
    }
    else {
        return (left, right) => {return left / right};
    }
}

const exprOne = '4+2';
let calculate = evaluate(exprOne);
console.log(`The expression ${exprOne} returns ${calculate(parseInt(exprOne.charAt(0)), parseInt(exprOne.charAt(2)))}`);

const exprTwo = '5*7';
calculate = evaluate(exprTwo);
console.log(`The expression ${exprTwo} returns ${calculate(parseInt(exprTwo.charAt(0)), parseInt(exprTwo.charAt(2)))}`);

const exprThree = '6-1';
calculate = evaluate(exprThree);
console.log(`The expression ${exprThree} returns ${calculate(parseInt(exprThree.charAt(0)), parseInt(exprThree.charAt(2)))}`);

const exprFour = '9/2';
calculate = evaluate(exprFour);
console.log(`The expression ${exprFour} returns ${calculate(parseInt(exprFour.charAt(0)), parseInt(exprFour.charAt(2)))}`);

