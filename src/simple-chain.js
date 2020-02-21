const chainMaker = {
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value = "") {
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !position ||
      isNaN(position) ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.values.length - 1
    ) {
      this.values = [];
      throw new Error();
    }

    this.values.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    const res = this.values.reduce((accum, el, i) => {
      return accum + (i !== 0 ? "~~" : "") + `( ${el} )`;
    }, "");

    this.values = [];

    return res;
  }
};

module.exports = chainMaker;
