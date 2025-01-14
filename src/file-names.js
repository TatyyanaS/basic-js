const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let asd = [];
  for(key in names) {
    if (!asd.includes(names[key])) asd.push(names[key]);
    else {
      for (let i = 1; i < Infinity; i++) {
        if (!asd.includes(names[key] + '(' + i + ')')) {
        asd.push(names[key] + '(' + i + ')');
        break;
        } else continue;
      }
    }
  }
  console.log(asd);
  return asd;
}
// renameFiles(["file", "file", "image", "file(1)", "file"])
// renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])
// ['a', 'b', 'cd', 'b ', 'a(3)'])

module.exports = {
  renameFiles
};
