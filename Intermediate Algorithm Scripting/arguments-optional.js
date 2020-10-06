function addTogether(x, y) {

    if (x, y) {
        return Number.isInteger(x) && Number.isInteger(y) ? x + y : undefined;
    } else {
        return Number.isInteger(x) ? function (y) {
            return Number.isInteger(y) ? x + y : undefined;
        } : undefined
    }

}

//test
addTogether(5)(7);
addTogether(10, '5');