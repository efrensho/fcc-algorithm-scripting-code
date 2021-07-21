function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return str.split("").map(l => {
        if ((/[A-Z]/).test(l)) {
            let code = alphabet.indexOf(l) - 13;
            return (code >= 0) ? alphabet[code] : alphabet[alphabet.length + code]
        } else {
            return l
        }
    }).join("")
}


// tests    
const tests = ["SERR PBQR PNZC", "SERR CVMMN!"];

tests.forEach(element => {
    console.log(rot13(element));
});
