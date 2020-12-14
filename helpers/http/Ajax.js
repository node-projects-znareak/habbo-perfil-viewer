//This class creates it to request information resources from the habbo api
const req = require("node-fetch");
const ora = require("ora");
const userProfileTransform = require("../formats/profile-format");
const {error} = require('../logs/log');
const downloading = ora("Downloading summary profile...");

const { USER_INFO_SHORT } = require("../../config/config");

class HabboRequest {
  async _request(url = "Undefined url") {
    try {
      const res = await (await req(url)).json();
      if(res.error){
        error(`\n[!] Profile banned or private`);
      }
      return res;
    } catch (err) {
        error(`\n[!] Request error, url: ${url}\nInfo: ${err}`);
    }
  }

  async getInfo(name) {
    downloading.start();
    const info = await this._request(USER_INFO_SHORT(name));
    downloading.stop();
    return userProfileTransform(info);
  }
}

module.exports = new HabboRequest();
