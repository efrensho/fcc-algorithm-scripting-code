function smallestCommons(arr) {
    let max = Math.max(...arr);
    let multip = max;
    let nums = [];

    // define numbers in the range of the numbers in the arguments
    for (let i = Math.min(...arr); i <= max; i++) {
        nums.push(i);
    }

    // returns until it finds a number that satisfy the condition, that is, when is divisible by all numbers between the min and max.
    while (!nums.every(n => multip % n == 0)) {
        multip += max;
    }

    return multip;
}



// special mention to JanEgbers from the freeCodeCamp forum who came up with this simple but amazing chunk of code 
// and by which I was inspired to come up with my solution.
function smallestCommons(arr) {

    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var mltple = max;

    for (var i = max; i >= min; i--) {
        if (mltple % i !== 0) {
            mltple += max;
            i = max;
        }
    }

    return mltple;
}