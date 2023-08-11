const reverseString = function(string) {
    let stringarray = []
    // String into array
    for (const char of string) {
        stringarray.push(char);
    }

    reversed = stringarray.reverse()
    reversed = reversed.join('')

    return(reversed)

};

// Do not edit below this line
module.exports = reverseString;
