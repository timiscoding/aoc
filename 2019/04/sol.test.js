const { hasSameDigits, isMonotonic, hasTwoSameDigits } = require("./sol");

describe("hasSameDigits()", () => {
  test("when number contains no repeats, return false ", () =>
    expect(hasSameDigits("123")).toBe(false));
  test("when number contains 1 adjacent repeat, return true", () =>
    expect(hasSameDigits("11")).toBe(true));
  test("when number contains non adjacent repeat, return false", () =>
    expect(hasSameDigits("1231")).toBe(false));
  test("when number contains 2 repeats, return true", () =>
    expect(hasSameDigits("111")).toBe(true));
});

describe("isMonotonic()", () => {
  test("when number is the same, return true", () => {
    expect(isMonotonic("111111")).toBe(true);
  });
  test("when 1 of the digits is the same, return true", () => {
    expect(isMonotonic("123455")).toBe(true);
  });
  test("when 1 of the digits decreases, return false", () => {
    expect(isMonotonic("223450")).toBe(false);
  });
});

describe("hasTwoSameDigits()", () => {
  test("when number has a triple, return false", () => {
    expect(hasTwoSameDigits("1222")).toBe(false);
  });
  test("when there's 3 doubles, return true", () => {
    expect(hasTwoSameDigits("112233")).toBe(true);
  });
  test("when there's a quad and double, return true", () => {
    expect(hasTwoSameDigits("111122")).toBe(true);
  });
});
