const { log, clear } = require("../logs/log");
const viewProfileSummary = require("./viewProfileSummary");

const menuSwitcher = (option) => {
  clear();
  switch (option) {
    case 1:
      viewProfileSummary();
      break;

    case 2:
      log("Elegiste ver perfil completo");
      break;

    default:
      break;
  }
};

module.exports = menuSwitcher;
