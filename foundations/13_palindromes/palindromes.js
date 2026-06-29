const palindromes = function (text) {
    let noPunctuation = text.replace(/[^\w]|_/g, '').toLowerCase();
    const temp = [...noPunctuation];
    let reverseText = temp.reverse().join("");
    
    return reverseText === noPunctuation;
};

// Do not edit below this line
module.exports = palindromes;
