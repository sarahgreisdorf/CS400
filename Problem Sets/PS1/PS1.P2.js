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

const evaluate = expr => eval(expr);
const exprOne = '4+2';
const exprTwo = '5*7';
const exprThree = '6-1';
const exprFour = '9/2';
console.log(`When we evaluate ${exprOne} we get ${evaluate(exprOne)}`);
console.log(`When we evaluate ${exprTwo} we get ${evaluate(exprTwo)}`);
console.log(`When we evaluate ${exprThree} we get ${evaluate(exprThree)}`);
console.log(`When we evaluate ${exprFour} we get ${evaluate(exprFour)}`);