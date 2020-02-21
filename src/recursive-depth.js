module.exports = class DepthCalculator {
  calculateDepth(arr, level = 1) {
    let newLevel = level;
    arr.forEach(x => {
      if (Object.prototype.toString.call(x) === "[object Array]") {
        newLevel = Math.max(newLevel, this.calculateDepth(x, level + 1));
      }
    });

    return newLevel;
  }
};
