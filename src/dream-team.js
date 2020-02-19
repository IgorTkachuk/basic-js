module.exports = function createDreamTeam(arr) {
  if (!(arr instanceof Array)) return false;

  return arr
    .filter(el => typeof el === "string")
    .map(el =>
      el
        .trim()
        .substring(0, 1)
        .toUpperCase()
    )
    .sort()
    .join("");
};
