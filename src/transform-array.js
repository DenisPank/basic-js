const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(Array.isArray(arr)){
    
  if(arr.includes('--double-next', 0)){ 
    let numberNextDouble = arr.indexOf('--double-next', 0)
    arr[numberNextDouble] = arr[numberNextDouble + 1]
  }
  if(arr.includes('--double-prev', 0)){ 
    let numberPrevDouble = arr.indexOf('--double-prev', 0)
    arr[numberPrevDouble] = arr[numberPrevDouble - 1]
  }
  if(arr.includes('--discard-prev', 0)){ 
    let numberPrevDiscard = arr.indexOf('--discard-prev', 0)
    arr.splice(numberPrevDiscard - 1, 2)
  }
  if(arr.includes('--discard-next', 0)){ 
    let numberNextDiscard = arr.indexOf('--discard-next', 0)
    arr.splice(numberNextDiscard, 2)
  }
   return arr 
  }
  return '\'arr\' parameter must be an instance of the Array!'
  }

module.exports = {
  transform
};
