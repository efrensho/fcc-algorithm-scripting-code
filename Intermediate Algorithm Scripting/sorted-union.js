function uniteUnique(...arr) {
    return arr.reduce((s, elem) => s.concat(elem.filter(n => !(n in s))));
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);