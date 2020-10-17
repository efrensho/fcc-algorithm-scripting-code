function pairElement(str) {
    return str.split("").map(s => {
        if (s == 'A') return ['A', 'T'];
        else if (s == 'T') return ['T', 'A'];
        else if (s == 'G') return ['G', 'C'];
        else return ['C', 'G'];
    });
}

pairElement("ATCGA");