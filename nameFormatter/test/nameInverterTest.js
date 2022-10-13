const chai = require("chai");
const assert = chai.assert;

const nameInverter = require("../nameInverter.js");

describe("nameInverter", function () {
  it("return an empty string when passed an empty string", function () {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("return a single name when passed a single name", function () {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("return a single name when passed a single name with extra spaces", function () {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("return a last-name, first-name when passed a first and last-name", function () {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  // it("Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)", function () {
  //   input: " first last";
  //   output: "last, first";
  // });
  // it("return an empty string when passed a single honorific", function () {
  //   input: "Dr. ";
  //   output: "";
  // });
  // it("return honorific first-name when passed honorific first-name", function () {
  //   input: "Dr. first";
  //   output: "Dr. first";
  // });
  // it("return a honorific last-name, first-name when passed honorific first-name last-name", function () {
  //   input: "Dr. first-name last-name";
  //   output: "Dr. last-name, first-name";
  // });
  // it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function () {
  //   input: " Dr. first-name last-name ";
  //   output: "Dr. last-name, first-name";
  // });
  // it("throw an error when name is undefined", function () {
  //   input: undefined;
  //   output: throw "Error";
  // });
});

/*






















*/