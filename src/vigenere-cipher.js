const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect === false) {
      this.isDirect = false;
    } else {
      this.isDirect = true;
    }
  }

  encrypt(message, key) {
    let result = "";

    if (message === undefined || key === undefined) {
      throw new Error();
    }

    while (key.length <= message.length) {
      key += key;
    }

    for (let i = 0, j = 0; i < message.length; i++) {
      let m = message.toUpperCase().charCodeAt(i);
      let k = key.toUpperCase().charCodeAt(j);

      if (m >= 65 && m <= 90) {
        result += String.fromCharCode(((m + k - 26) % 26) + 65);
        j++;
      } else {
        result += message[i].toUpperCase();
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    let result = "";

    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }
    while (key.length <= encryptedMessage.length) {
      key += key;
    }

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      let m = encryptedMessage.toUpperCase().charCodeAt(i);
      let k = key.toUpperCase().charCodeAt(j);

      if (m >= 65 && m <= 90) {
        result += String.fromCharCode(((m - k + 26) % 26) + 65);
        j++;
      } else {
        result += encryptedMessage[i].toUpperCase();
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
