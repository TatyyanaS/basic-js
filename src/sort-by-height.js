const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  let sortedArr = arr.slice();
  let a = []
  sortedArr.sort((a, b) =>  {
    return a - b;
});
  for (key in arr) {
    if (arr[key] == -1) {
      a.push(key);
    }
  }
  for (let i = 0; i < a.length; i++) sortedArr.shift();
  for (key in a) sortedArr.splice(a[key], 0, -1);
  return sortedArr;
}

module.exports = {
  sortByHeight
};
