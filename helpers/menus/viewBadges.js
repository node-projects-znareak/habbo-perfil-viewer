const printTable = require("../tables/table");
const badgesFormat = require("../formats/badges-format");

const viewBadges = (badges) => {
  const badgesTransform = badges.map((badge) => badgesFormat(badge));
  printTable(badgesTransform);
};

module.exports = viewBadges;
