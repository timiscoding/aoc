const { getInputFromFile, transform } = require("../utils.js");
const { part1, part2 } = require("./sol");

let input;
beforeAll(() => {
  input = getInputFromFile(1, "data.js");
  for (let [name, data] of Object.entries(input)) {
    input[name] = transform(data, "\n");
  }
});

describe("01", () => {
  test("t1", () => {
    const p1 = part1(input.t1);
    const p2 = part2(input.t1);
    expect(p1).toBe(34241);
    expect(p2).toBe(51316);
  });

  test("t2", () => {
    const p1 = part1(input.t2);
    const p2 = part2(input.t2);
    expect(p1).toBe(34239);
    expect(p2).toBe(51314);
  });
});
