function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

const sumAll = function(start, end) {
    // Check typing
    if ((!Number.isInteger(start)) || (!Number.isInteger(end))) {
        return 'ERROR';
    }
    // Check negatives
    if ((start < 0) || (end < 0)) {
        return 'ERROR';
    }
    // Swap if end value is greater
    if (start > end) {
        numbers = range(end, start);
    }
    else {
        numbers = range(start,end);
    }
    sum = 0;
    // Summation
    for(number of numbers) {
        sum = sum + number;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

// Get range w/ two parameters
// Add everything using for loop