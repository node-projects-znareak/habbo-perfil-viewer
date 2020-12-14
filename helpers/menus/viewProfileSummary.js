const { log, clear } = require("../logs/log");
const input = require("../input/input");
const HReq = require("../http/Ajax");
const printTable = require("../tables/table");
const viewBadges = require("./viewBadges");

const viewProfileSummary = () => {
  log("\nWrite your habbo name.");
  input(async (name) => {
    const userProfile = await HReq.getInfo(name);
    log(userProfile)
    if (userProfile) {
      clear();
      log("\n# Profile:");
      printTable(userProfile, ["Badges"]);
      log("\n# Badges:");
      viewBadges(userProfile.Badges);
    }
  });
};

module.exports = viewProfileSummary;
