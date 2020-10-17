// dicctionary solution
function convertHTML(str) {
    let entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    return str.split("").map(char => entities[char] || char).join("");
}


// switch solution
function convertHTML(str) {
    let newStr = str.split("");

    newStr.forEach(char => {
        switch (char) {
            case '&':
                newStr[newStr.indexOf(char)] = '&amp;';
                break;
            case '<':
                newStr[newStr.indexOf(char)] = '&lt;';
                break;
            case '>':
                newStr[newStr.indexOf(char)] = '&gt;';
                break;
            case '"':
                newStr[newStr.indexOf(char)] = '&quot;';
                break;
            case "'":
                newStr[newStr.indexOf(char)] = '&apos;';
                break;
        }

    });
    return newStr.join("");
}



console.log(convertHTML("<Schindler's List>"));