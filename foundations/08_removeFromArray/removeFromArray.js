const removeFromArray = function(anArray, ...thisArgs) {
    for (let i = 0; i < anArray.length; i++) {
        for (let j = 0; j < thisArgs.length; j++) {
            if (thisArgs[j] === anArray[i]) {
                anArray.splice(i, 1);
                i--;
            }
        }
    }

    return anArray;
}


// Do not edit below this line
module.exports = removeFromArray;

//console.log(removeFromArray([1, 2, 3, 4], 3));