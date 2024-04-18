const fibonacci = function(pos) {
    pos = parseInt(pos);
    if(pos < 0 ) return "OOPS";
    if(pos == 0)   return 0;
    if (pos == 1 || pos == 2) return 1;
    let index = 3;
    let a = 1, b = 1;
    let fib = [a, b];
    while(index <= pos){
        let c = a + b;
        fib[0] = b;
        fib[1] = c;
        a = fib[0];
        b = fib[1];
        index += 1;
    }
    return fib[1];

};

// Do not edit below this line
module.exports = fibonacci;
