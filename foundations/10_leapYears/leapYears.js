const leapYears = function(year) {
    // leap years are divisible by 4
    // if they are divisible by both 100 and 400, they are leap years
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 100 === 0 && year % 400 === 0) {
                return true
            } else {
                return false
            }
        }
        
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
