const { getInputFromFile, transform } = require("../utils.js");
const { run } = require("./sol");

let input;
beforeAll(() => {
  input = getInputFromFile(2, "data.js");
  for (let [name, data] of Object.entries(input)) {
    input[name] = transform(data, ",", v => +v);
  }
});

describe("02 p1", () => {
  test("t1", () => {
    const res = run(input.t1);
    expect(res).toEqual([2, 0, 0, 0, 99]);
  });

  test("t2", () => {
    const res = run(input.t2);
    expect(res).toEqual([2, 3, 0, 6, 99]);
  });

  test("t3", () => {
    const res = run(input.t3);
    expect(res).toEqual([2, 4, 4, 5, 99, 9801]);
  });

  test("t4", () => {
    const res = run(input.t4);
    expect(res).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });
});
