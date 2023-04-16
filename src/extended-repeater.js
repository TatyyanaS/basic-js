const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let string = '';
  let repeatTimes = options.repeatTimes;
  if (repeatTimes === undefined || repeatTimes === null) {
    repeatTimes = 1;
  }
  let separator = options.separator;
  if (separator === undefined || separator === null) {
    separator = '+';
  }
  let addition = options.addition;
  if (addition === undefined || addition === null) {
    addition = '';
  } else {
    addition = String(addition);
  }
  let additionRepeatTimes = options.additionRepeatTimes;
  if (additionRepeatTimes === undefined || additionRepeatTimes === null) {
    additionRepeatTimes = 1;
  }
  let additionSeparator = options.additionSeparator;
  if (additionSeparator === undefined || additionSeparator === null) {
    additionSeparator = '|';
  }

  for (let i = 0; i < repeatTimes; i++) {
    string += str;
    for (let k = 0; k < additionRepeatTimes; k++) {
      string += addition;
      if (k < additionRepeatTimes - 1) {
        string += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      string += separator;
    }
  }
  console.log(string);
  return string;
}
// repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 })
// 'la+sla+sla+'

module.exports = {
  repeater
};
