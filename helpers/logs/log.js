const color = require("chalk");
const log = (...str) => console.log(color.greenBright(...str)),
  clear = console.clear;

const error = (...str) => console.log(color.bgRedBright(...str));

module.exports = {
  log,
  clear,
  error,
};
