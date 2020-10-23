function palindrome(str) {
    let simplifiedStr = str.split(/[\W_]/).join("").toLowerCase()
    let revertedStr = simplifiedStr.split("").reverse().join("")

    return revertedStr == simplifiedStr ? true : false
}


/*
    tests
    palindrome("2_A3*3#A2")
    palindrome("not a palindrome")
    palindrome("My age is 0, 0 si ega ym.")
    palindrome("0_0 (: /-\ :) 0-0")

*/