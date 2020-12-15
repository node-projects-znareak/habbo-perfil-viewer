const { log, clear } = require("../logs/log");
const input = require("../input/input");
const HReq = require("../http/Ajax");
const printTable = require("../tables/table");
const viewBadges = require("./viewBadges");

const viewProfileSummary = () => {
  log("\nWrite your habbo name.");
  input(async (name) => {
    if (name) {
      try {
        const userProfile = await HReq.getInfo(name);
        log(userProfile);
        if (userProfile) {
          clear();
          log("\n# Profile:");
          printTable(userProfile, ["Badges"]);
          log("\n# Badges:");
          if (userProfile.Badges.length) {
            viewBadges(userProfile.Badges);
          } else {
            log("[!] Has no plates attached.");
          }
        }
      } catch (e) {
        log("[!] Network error in fetching data.");
      }
    } else {
      log("[!] Empty habbo name, please write a name...");
    }
  });
};

module.exports = viewProfileSummary;
