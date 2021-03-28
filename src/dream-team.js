const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .map((member) => {
          if (typeof member == "string") {
            return member.trim()[0].toUpperCase();
          }
        })
        .sort()
        .join("")
    : false;
};
