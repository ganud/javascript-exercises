const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    base = ''

    for(let i = 0; i < num; i ++) {
        base = base + string;
    }
    return base;
};

// Do not edit below this line
module.exports = repeatString;
