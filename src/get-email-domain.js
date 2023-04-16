const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let a = email.lastIndexOf('@');
  let arr = Array.from(email).slice(a+1);
  console.log(arr.join(''));
  return arr.join('');
}
// getEmailDomain('example-indeed@strange-example.com'); //'strange-example.com';
module.exports = {
  getEmailDomain
};
