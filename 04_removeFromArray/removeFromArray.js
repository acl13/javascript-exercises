const removeFromArray = function(arr, ...theArgs) {
   return arr.filter(element => !theArgs.includes(element));
}; 
   


// Do not edit below this line
module.exports = removeFromArray;
