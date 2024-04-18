const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let newArr = string.toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))

    let copyString = newArr.reverse().join('');

    if(string.toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character)) 
    .join('')
        === copyString){
        return true;
    }
    return false;

};
console.log(palindromes('racecar!'))
// Do not edit below this line
module.exports = palindromes;
