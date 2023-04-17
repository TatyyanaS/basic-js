const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let b = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let k = 0; k < matrix[i].length; k++) {
      let a = false;
      for(let j = 0; j < i; j++) {
        if(matrix[j][k] === 0) {
          a = true;
          break;
        } 
      }
      if(a) {
        b.push(matrix[i][k]);
      }
    }
  }
  console.log(b);
    let c = matrix.flat().reduce((x, y) => x + y);
    if(b == []) {
      return c;
    } else {
      let d = b.reduce((x, y) => x + y, 0);
      return c - d;
    }
  }

module.exports = {
  getMatrixElementsSum
};
