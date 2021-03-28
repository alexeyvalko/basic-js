const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = str;
  let addition = "";

  if ("addition" in options) {
    addition = `${options.addition}`;

    if (
      "additionRepeatTimes" in options &&
      options.additionRepeatTimes !== undefined
    ) {
      let additionRepeatTimes = options.additionRepeatTimes;

      if ("additionSeparator" in options) {
        let additionSeparator = `${options.additionSeparator}`;
        addition = `${addition}${additionSeparator}`.repeat(
          additionRepeatTimes
        );
        let addLength = addition.length - additionSeparator.length;
        addition = addition.slice(0, addLength);
      } else {
        let additionSeparator = `|`;
        addition = `${addition}${additionSeparator}`.repeat(
          additionRepeatTimes
        );
        let addLength = addition.length - additionSeparator.length;
        addition = addition.slice(0, addLength);
      }
    }

    string += addition;
  }

  if ("repeatTimes" in options && options.repeatTimes !== undefined) {
    let repeatTimes = options.repeatTimes;

    if ("separator" in options) {
      let separator = `${options.separator}`;
      string = `${string}${separator}`.repeat(repeatTimes);
      let delLength = string.length - separator.length;
      string = string.slice(0, delLength);
    } else {
      string = `${string}+`.repeat(repeatTimes);
      string = string.slice(0, string.length - 1);
    }
  }

  return string;
};
