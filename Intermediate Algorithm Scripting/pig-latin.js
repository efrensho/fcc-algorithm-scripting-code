function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = [];
    let i = 0;

    while (vowels.includes(str[i]) === false && i < str.length) {
        arr.push(str[i]);
        i++;
    }

    if (arr.length === 0) {
        return str.concat("way");
    } else {
        return str.slice(arr.length,).concat(`${arr.join('')}ay`);
    }
}

translatePigLatin("schwartz");