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
  const str = n.toString();
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    const newNum = parseInt(newStr);
    if (newNum > max) {
      max = newNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
