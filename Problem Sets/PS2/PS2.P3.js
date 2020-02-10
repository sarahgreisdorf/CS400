function cubeIt (arr) {
    if (Number.isInteger(arr)) {
        console.log(`${Math.pow(arr, 3)}`)
        return 5;
    } else {
        let cubed = arr.map(value => Math.pow(value,3));
        console.log(`${cubed}`);
    }
}


cubeIt([1,2,3,4,5,6,7]);
