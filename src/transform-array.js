module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== "[object Array]")
    throw new Error();

  for (let i = 0; i <= arr.length - 1; ) {
    switch (arr[i]) {
      case "--double-next":
        if (i + 1 > arr.length - 1) {
          arr.splice(i, 1);
        } else {
          arr.splice(i, 1, arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i - 1 >= 0) {
          arr.splice(i, 1, arr[i - 1]);
        } else {
          arr.splice(i, 1);
        }
        break;
      default:
        i++;
    }
  }

  for (let i = 0; i <= arr.length - 1; ) {
    switch (arr[i]) {
      case "--discard-next":
        arr.splice(i, 2);
        break;
      case "--discard-prev":
        if (i - 1 >= 0) {
          arr.splice(i - 1, 2);
        } else {
          arr.splice(i, 1);
        }
        break;
      default:
        i++;
    }
  }

  return arr;
};
