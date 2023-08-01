const leapYears = function(n) {
   if ((n % 4 === 0) && (n % 400 === 0)){
    return true;
   } else if ((n % 4 === 0) && (n % 100 != 0)){
     return true;
   } else {
    return false;
   }
   
};


console.log(leapYears(1984));
// Do not edit below this line
module.exports = leapYears;
