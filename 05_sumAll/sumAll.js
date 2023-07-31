const sumAll = function(a,b) {
    if(a < 0 || b < 0 ||typeof a != "number" || typeof b != "number" ) {
        return "ERROR";
    }
    else if(a < b) {
        let sum = 0;
        for(n = a; n <= b; n++){
            sum = sum + n; 
        }
        return sum;
    }
    else if(b < a) {
        let sum = 0;
        for(n = b; n <= a; n++){
            sum = sum + n;
        }
        return sum;
    }
    else {
        return "ERROR";
    }

};

console.log(sumAll(13,6));

// Do not edit below this line
module.exports = sumAll;
