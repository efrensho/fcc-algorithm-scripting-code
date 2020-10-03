function steamrollArray(arr) {

    if (arr.every(n => !Array.isArray(n))) {
        return arr;
    } else {
        return steamrollArray(arr.reduce((acc, value) => acc.concat(value), []));
    }

}

//one liner
function steamrollArray(arr) {
    return arr.every(n => !Array.isArray(n)) ? arr : steamrollArray(arr.reduce((a, b) => a.concat(b), []));
}


// test
steamrollArray([1, [2], [3, [[4]]]]);
