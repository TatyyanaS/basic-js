const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  matrix = matrix.flat(Infinity);
  let count = 0;
  for (let a in matrix) {
    if (matrix[a] == '^^') count++;
  }
  return count;
};

module.exports = {
  countCats
};
