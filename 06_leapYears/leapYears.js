const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 400 == 0) {
            return true;
        }
        else if (year % 100 == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

// If year divisible by 4
    // check if year divisible by 400, return true if true
    // check if year divisible by 100, return false if true
    // else return true
// return false
