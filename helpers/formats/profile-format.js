const userProfileTransform = ({
  name,
  motto,
  memberSince,
  uniqueId,
  selectedBadges,
  error = null,
}) => {
  return error
    ? null
    : {
        Name: name,
        Motto: motto.replace(/\s\s+/g, " "),
        Member: new Date(memberSince).toLocaleDateString(),
        Id: uniqueId,
        Badges: selectedBadges,
      };
};
module.exports = userProfileTransform;
