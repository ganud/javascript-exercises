
const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        // Exclude items in args
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;

// Create a new array without the target items specified