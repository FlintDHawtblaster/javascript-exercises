const repeatString = function(word, times) {    
    if (times < 0) {
        return "ERROR";
    } 
    
    endResult = "";
    for (let i = 0; i < times; i++) {
        endResult += word;
    }
    return endResult;    
};

// Do not edit below this line
module.exports = repeatString;
