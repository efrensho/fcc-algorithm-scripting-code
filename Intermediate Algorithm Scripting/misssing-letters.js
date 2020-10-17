function fearNotLetter(str) {
    let strAscii = [];
    let expectedAscii = [];
    let missingLetter = [];

    strAscii = str.split("").map(l => l.charCodeAt());

    for (let i = strAscii[0]; i < strAscii[0] + str.length; i++) {
        expectedAscii.push(i);
    }

    missingLetter = expectedAscii.filter(num => strAscii.indexOf(num) == -1);

    return missingLetter.length == 0 ? undefined : String.fromCharCode(missingLetter);
}

fearNotLetter('abcdefghijklmnopqtvwxyz');