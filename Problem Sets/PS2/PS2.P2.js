/*Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn. */

function*  nextWord(word) {
    const wordSplit = word.split(' ');
    while(true) {
        let first = wordSplit.shift();
        yield first;
    }
}




let wordUsed = 'All I know is something like a bird within her sang';
const wordGen = nextWord(wordUsed);
let count = wordUsed.split(' ').length;

while(count > 0){
    console.log(wordGen.next().value);
    count--;
}