let honorific = ["Mr.", "Mrs.", "Ms.", "Dr."];

const isHonorific = function (name, honorific) {
  // console.log(name, honorific)
  return honorific.includes(name);
};
const nameSwitch = function (firstname, lastname) {
  return `${lastname}, ${firstname}`;
};

const nameInverter = function (name) {
  if (name === undefined) {
    return "Error";
  }
  name = name.trim();
  if (name === "" || isHonorific(name, honorific)) {
    return "";
  } else {
    name = name.split(" ");
    if (isHonorific(name[0], honorific) === false) {
      if (name.length === 1) {
        return name[0];
      } else {
        return nameSwitch(name[0], name[1]);
      }
    } else {
      if (name.length === 2) {
        return `${name[0]} ${name[1]}`;
      } else {
        return `${name[0]} ${name[2]}, ${name[1]}`;
      }
    }
  }
};

module.exports = nameInverter;
