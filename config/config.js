
const HOTEL_LANG = "es";
const BASE_URL = `https://www.habbo.${HOTEL_LANG}/api/public/`;
const USER_INFO_SHORT = (name) => `${BASE_URL}users?name=${name}`;
const USER_INFO_LONG = (uniqId) => `${BASE_URL}users/${uniqId}/profile`;

module.exports = {
  BASE_URL,
  USER_INFO_SHORT,
  USER_INFO_LONG,
};
