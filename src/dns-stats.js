const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let arr = {};
  for (let domain of domains) {
    domain = domain.split(".").reverse();
    let str = "";
    console.log(domain);
    
    for (let key of domain) {
      str += "." + key;
      if (arr[str] === undefined) {
        arr[str] = 1;
      } else {
        arr[str]++;
      }
    }
  }
  console.log(arr);
  return arr;
}
// getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]);

module.exports = {
  getDNSStats,
};
