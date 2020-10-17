function destroyer(arr, ...args) {
    return arr.filter(value => !(args.includes(value)));
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);