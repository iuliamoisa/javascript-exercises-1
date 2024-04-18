const removeFromArray = function(arr, ...values) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!values.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
