function evalFunc (aString, execute) {
    return execute(aString)
}

let result = evalFunc('supercalifragilisticexpialidocious',
    word => word.replace(/c/g, '*c').split('*')
)

console.log(result);

let func2 = evalFunc( 'supercalifragilisticexpialidocious',word => {

    let returnOb = {
        originalString: word,
        modifiedString: word.replace(/a/g, 'A'),
        numberReplaced: word.split('a').length -1,
        length: word.length
    };

    return returnOb
    }
);

console.log(func2)