module.exports = function countCats(arr) {
  let counter = 0;

  arr.forEach(row => {
    row.forEach(el => {
      if (el === "^^") counter += 1;
    });
  });

  return counter;
};
