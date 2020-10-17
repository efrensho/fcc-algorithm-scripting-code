function spinalCase(str) {
    return str.split(/\W|(?=[A-Z])|_/).join("-").toLowerCase();
}


spinalCase("AllThe-small Things");
