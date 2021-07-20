function convertToRoman(num) {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const romanNumbers = [];

  function getRomanNumber(n) {
    let remainer;
    for (let i = 0; i < numbers.length; i++) {
      remainer = n - numbers[i];
      if (remainer >= 0) {
        romanNumbers.push(symbols[i]);
        break;
      }
    }
    return remainer !== 0 ? getRomanNumber(remainer) : null;
  }

  getRomanNumber(num);
  return romanNumbers.join("");
}

/*    TESTS    */
let tests = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

tests.forEach((num) => {
  console.log(convertToRoman(num));
});
