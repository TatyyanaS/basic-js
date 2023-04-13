const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  // let count2 = 0;
  let arr = [];
  // 222219
  // n = JSON.stringify(n);
  n = n.toString();
  for(let i = 0; i <= n.length - 1; i++) {
    let count2 = n.slice(count, i) + n.slice(i + 1);
    arr.push(parseInt(count2));
    // count2 = count +1;
  }
  // console.log(arr)
  const max = arr.reduce((a, b) => Math.max(a, b));
  // console.log(max)
  // console.log(123)
  return max;
}
deleteDigit(152);

module.exports = {
  deleteDigit
};
