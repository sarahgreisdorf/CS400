


const evalFunc = (aString, execute) => execute(aString);


/*Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
    [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’] */


let result = evalFunc('supercalifragilisticexpialidocious',
    word => word.replace(/c/g, '*c').split('*')
)
console.log(result);

/*For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
string, the modified string, the total number of As in the modified string, and the overall length
of the modified string:*/

let func2 = (aString, func) => evalFunc( 'supercalifragilisticexpialidocious',word => word.replace(/a/g, 'A'));
    let thing = {
        originalString:  aString,
        modifiedString: word,
        numberReplaced: word.match('A').length(),
        length: word.length()
    }

    return thing;

}

console.log(func2)