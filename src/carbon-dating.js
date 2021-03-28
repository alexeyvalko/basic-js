const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let number = parseFloat(sampleActivity);

  if (typeof sampleActivity !== "string") {
    return false;
  } else if (number < MODERN_ACTIVITY && number > 0) {
    return Math.ceil(
      (Math.log(MODERN_ACTIVITY / number) * HALF_LIFE_PERIOD) / 0.693
    );
  } else {
    return false;
  }
};
