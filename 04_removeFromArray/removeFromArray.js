const removeFromArray = function(arr, ...theArgs) {
   const newArray = arr.filter(function(element) {
    return !theArgs.includes(element);
}); 
   return newArray;
};


//let array = [1,2,3,4];

console.log(removeFromArray([1,2,3,4], 2, 3));

/*
let arr = [1,2,3,4];
const newArray = arr.filter(function(element) {
    return element != 3;
});

console.log(newArray);

*/

// Do not edit below this line
module.exports = removeFromArray;
