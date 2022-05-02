const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  
  if(date instanceof Date ){   
let month = date.getMonth();
const season = {
 0:"winter",
 1:"winter",
 2:"spring",
 3:"spring",
 4:"spring",
 5:"summer",
 6:"summer",
 7:"summer",
 8:"autumn",
 9:"autumn",
 10:"autumn",
 11:"winter"
}
return Object.values(season)[month]
  } 
  if(date == null){
    
  return 'Unable to determine the time of year!'
  }
  return 'Invalid date!'

}

module.exports = {
  getSeason
};
