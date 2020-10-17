function sumAll(arr) {
    let newArr = [];
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        newArr.push(i);
    }
    return newArr.reduce((s, n) => s + n);
}

sumAll([1, 3]);