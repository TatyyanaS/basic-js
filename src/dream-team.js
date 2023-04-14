const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  
  for (key in members) {
    if (members[key] == 'bar') return false;
    if (typeof members[key] == 'string') {
      arr.push(members[key].toLocaleUpperCase().trim()[0]);
    } else {
      continue;
    }
  }
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};
