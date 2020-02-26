class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(direct = true) {
    this.direct = direct;
  }

  cipher = function(str, key, direction) {
    let res = "";

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        let strSymPosition = this.alphabet.indexOf(str[i]);
        let keyIndex = key[j >= key.length ? j % key.length : j];
        let keySymPosition = this.alphabet.indexOf(keyIndex);

        keySymPosition = typeof direction !== "undefined" && direction.indexOf("decrypt") !== -1 ? -keySymPosition : keySymPosition;
        res += this.alphabet[(this.alphabet.length + (strSymPosition + keySymPosition)) % this.alphabet.length];
        j++;
      } else {
        res += str[i];
      }
    }

    if (!this.direct)
      return res
        .split("")
        .reverse()
        .join("");

    return res;
  };

  encrypt(str, key) {
    if (!str || !key) throw new Error();

    return this.cipher(str, key);
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error();

    return this.cipher(str, key, "decrypt");
  }
}

module.exports = VigenereCipheringMachine;
