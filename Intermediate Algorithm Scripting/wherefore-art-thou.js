function whatIsInAName(collection, source) {
    let arr = [];
    let sourceKeys = Object.keys(source);

    arr = collection.filter(obj => {
        let a = sourceKeys.map(key => source[key]);
        let b = sourceKeys.map(key => obj[key]);

        return JSON.stringify(a) == JSON.stringify(b);
    });

    return arr;
}


whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 });