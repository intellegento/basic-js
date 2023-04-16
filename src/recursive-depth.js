const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      // base case: arr is not an array, so depth is 0
      return 0;
    }

    let maxDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      const depth = this.calculateDepth(arr[i]);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }

    // add 1 to the maximum depth of the sub-arrays to get the depth of the current array
    return maxDepth + 1;
  }
}

module.exports = {
  DepthCalculator
};
