const findTheOldest = function(arr) {
    let oldestIndex = 0;
    let oldestAge = 0;
    arr.forEach((element, index) => {
        if(!element.yearOfDeath) {
            element.yearOfDeath = new Date().getFullYear();
        }
        let age = element.yearOfDeath - element.yearOfBirth;
        if(age > oldestAge) {
            oldestAge = age;
            oldestIndex = index;
        }
    });

    return arr[oldestIndex];
};



// Initialize oldest age and index
// For each person, get the age
    // If current age is greater than older age, update oldest age and index
// Return the oldest age via the oldest index of the array



// Do not edit below this line
module.exports = findTheOldest;
