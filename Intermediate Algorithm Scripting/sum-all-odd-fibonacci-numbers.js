function sumFibs(num) {
    let fibonacciSec = [1, 1];

    // defines an array with the fibonacci numbers up to the num argument
    for (let i = 0; i < num; i++) {
        fibonacciSec.push(fibonacciSec[i] + fibonacciSec[i + 1]);
        if (fibonacciSec[i + 1] + fibonacciSec[i + 2] > num) {
            break;
        }
    }

    return fibonacciSec.filter(n => n % 2 != 0).reduce((s, n) => s + n);
}


sumFibs(15);