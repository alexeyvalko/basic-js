const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    arr.forEach((nestedArr) => {
      if (Array.isArray(nestedArr)) {
        depth = Math.max(this.calculateDepth(nestedArr) + 1, depth);
      }
    });
    return depth;
  }
};
