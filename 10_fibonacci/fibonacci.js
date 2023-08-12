const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS";
    }
    num = parseInt(num)


    // Recursive implementation in ternary form
    return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);


    // if(num < 2) {
    //     return num;
    // }
    // else {
    //     return fibonacci(num - 1) + fibonacci(num - 2);
    // }
};

// Do not edit below this line
module.exports = fibonacci;
