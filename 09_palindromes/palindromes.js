const palindromes = function (str) {
    // Reverse string, trim punctuation and space, then compare
    let punctuationless = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reversed = punctuationless.split("").reverse().join("");
        
    if(reversed === punctuationless) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
