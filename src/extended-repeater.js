module.exports = function repeater(str = "", options) {
  const { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" } = options;
  const add = Array.from(Array(additionRepeatTimes), _ => "" + addition).join(additionSeparator);
  return Array.from(Array(repeatTimes), _ => str + add).join(separator);
};
