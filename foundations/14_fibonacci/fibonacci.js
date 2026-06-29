const fibonacci = function(a) {
    let num = parseInt(a, 10);

    if (num > 0) {
        let newArray = [1, 1]
        for (let i = 2; i < num; i++) {
            nextValue = newArray[i-1] + newArray[i-2];
            newArray.push(nextValue);
        }

        return newArray[num-1];
    } else if (num === 0) {
        return num;
    } else {
        return "OOPS";
    }
    
};

// Do not edit below this line
module.exports = fibonacci;

console.log(parseInt("0", 10));