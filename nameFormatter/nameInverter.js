const nameSwitch = function (firstname, lastname) {
  return `${lastname}, ${firstname}`;
};

const nameInverter = function (name) {
  name = name.trim();
  if (name === "") {
    return "";
  } else {
    name = name.split(" ");
    if (name.length > 1) {
      return nameSwitch(name[0], name[1]);
    }
  }
  return name;
};

module.exports = nameInverter;
