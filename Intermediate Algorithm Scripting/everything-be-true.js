function truthCheck(collection, pre) {
    return collection.map(obj => obj[pre]).every(prop => prop);
}


truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa" }, { "user": "Po", "sex": "female" }], "sex");
