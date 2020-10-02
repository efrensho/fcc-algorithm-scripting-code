function sumPrimes(num) {

    // generate array with numbers from 2 up to num value
    let numbers = [];
    for (let i = 2; i <= num; i++) {
        numbers.push(i);
    }

    // assign new filtered array with primes only
    let primes = [];
    primes = numbers.filter(num => {
        for (let i = 2; i <= num; i++) {
            if (i == num) {
                return true;
            }
            else if (num % i == 0) {
                return false;
            }
        }
    });

    // sums all numbers from the primes array
    return primes.reduce((sum, n) => sum + n);
}


// test
sumPrimes(997);
