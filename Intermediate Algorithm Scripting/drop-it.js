function dropElements(arr, func) {
    let newArr = arr.slice(arr.indexOf(arr.find(func)),);

    return newArr.length == 1 ? [] : newArr;
}


dropElements([1, 2, 4, 3, 9, 2], function (n) { return n > 2; });
