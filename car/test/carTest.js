const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4
      const car = {
        type: "hatchback"
      };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy)
  });
  it("should return false when there are no details about the car", function() {
    const car = {
      type: "",
      color: "",
      price: 0,
      litresPer100km: 0
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy)
  });
  it("should return true when the car is pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy)
  });
  it("should return false when the car is a hatchback and pink", function() {
    const car = {
      color: "pink",
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy)
  });
  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 5000,
      litresPer100km: 6
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy)
  });
  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 5000,
      litresPer100km: 11
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy)
  });
  it("should return false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      price: 5001,
      litresPer100km: 6
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy)
  });
  it("should return false when the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      price: 5001,
      litresPer100km: 11
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy)
  });
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 4999,
      litresPer100km: 5
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy)
  });
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 4999,
      litresPer100km: 12
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy)
  });
  it("should return undefined when there is no car", function() {
    const car = undefined;
    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy)
  });
});