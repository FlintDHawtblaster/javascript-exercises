const findTheOldest = function(anArray) {
    let oldest = 0;
    let oldestIndex = 0;
    let yearDied = 0;

    for (let i = 0; i < anArray.length; i++) {
        if ('yearOfDeath' in anArray[i] === false) {
            yearDied = new Date().getFullYear();
        } else {
            yearDied = anArray[i]["yearOfDeath"];
        }

        const yearsOld = yearDied - anArray[i]["yearOfBirth"];

        if (oldest < yearsOld) {
            oldest = yearsOld;
            oldestIndex = i;
        } 
    }

    return anArray[oldestIndex];
};


// Do not edit below this line
module.exports = findTheOldest;
