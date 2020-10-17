function myReplace(str, before, after) {
    let newStr = str.split(" ");
    let index = newStr.indexOf(before);

    newStr[index] = convertStr(after, before);

    return newStr.join(" ");
}

function convertStr(after, before) {
    if (before === before.toLowerCase()) {
        return after.toLowerCase();
    } else {
        return after[0].toUpperCase() + after.slice(1,);
    }
};


myReplace("I think we should look up there", "up", "Down");