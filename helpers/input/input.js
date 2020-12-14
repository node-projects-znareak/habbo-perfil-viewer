const prompt = require("prompt");

const input = (fn) => {
  prompt.start();
  prompt.get(["option"], (error, result) => {
    if (error) {
      throw new Error("[!] Failed to request entry.");
    }
    fn(result.option);
  });
};

module.exports = input;
