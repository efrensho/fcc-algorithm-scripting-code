function telephoneCheck(str) {
  const onlyNumbers = str.split(/[\D]/).join("");

  if(/^[-]/.test(str)){
    return false;
  }

  if(onlyNumbers.length === 11){
    if(onlyNumbers[0] != '1') {
      return false
    }
  } else if (onlyNumbers.length !== 10){
    return false
  }

  if(str.includes('(') || str.includes(')')) {
      if((str.match(/[()]/g).length) > 2){
        return false
      }
    return (/\(\d{3}\)/).test(str)
  }

  const testStr = /[^1]?\s?[(]?\d{3}[-)]?\s?\d{3}[-]?\s?\d{4}/
  return testStr.test(str);
}


/*    TESTS    */
let tests = [
  "555-555-5555", "1(555)555-5555", "(6054756961)", "-1 (757) 622-7382", "10 (757) 622-7382"
];

tests.forEach((element) => {
  console.log(telephoneCheck(element));
});