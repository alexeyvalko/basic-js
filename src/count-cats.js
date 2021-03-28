const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;

  backyard.forEach((garden) => {
    cats += garden.filter((item) => item == "^^").length;
  });
  return cats;
};
