const color = require("chalk");
const { log } = require("../logs/log");
const menuSwitcher = require("./menuSwitcher");
const input = require("../input/input");

const menu = () => {
  log("\nHello, welcome, write one of the following options below:\n");
  log(color.cyan("1- View the summary of a user's profile."));
  log(color.cyan("2- View a user's full profile."));
  log(color.cyan("3- View your personal accounts (session required)"));
  log("\n");
  input((option) => menuSwitcher(+option));
};

module.exports = menu;
