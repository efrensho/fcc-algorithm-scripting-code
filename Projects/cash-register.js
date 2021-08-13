const currency =  {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  const originalChange = ((cash * 100) - (price * 100));
  let change = originalChange;
  const results = [];

  // convert cid to object
  const objCid = Object.fromEntries(cid.filter(el => el[1] !== 0).reverse());

  // multiply cid * 100
  const convertedCid = Object.keys(objCid).reduce((acc, coin)=> {
    acc[coin] = Math.round(objCid[coin]  * 100);
    return acc;
  }, {})


  for (const coin of Object.keys(convertedCid)) {
    let counter = 0;
    while (change - currency[coin] >= 0 && convertedCid[coin]) {  
      change -= currency[coin];
      convertedCid[coin] = convertedCid[coin] - currency[coin];
      counter++;
    }

    if(counter !== 0) {
      results.push([coin, (currency[coin] * counter) / 100] ); 
    }

  }

  const resultsChange = results.reduce((acc, arr) => acc + arr[1] * 100, 0)
  let status = "";
  let changeArr = [];

  if(resultsChange === originalChange){
    const leftCid = Object.values(convertedCid).reduce((sum, value) => sum + value, 0)
    if(leftCid !== 0) {
      status = "OPEN"
      changeArr = results;
    } else {
      status= "CLOSED"
      changeArr = cid
    }
  } else {
    status = "INSUFFICIENT_FUNDS"
    changeArr = [];
  }
  
  return {
    status: status,
    change: changeArr,
  }

}


/*    TESTS    */
const tests = [
  [3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]],
  [19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]],
  [19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]]
];

tests.forEach((element) => console.log(checkCashRegister(...element)))
