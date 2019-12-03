const { getInputFromServer, transform } = require("../utils.js");
const { part1, part2 } = require("./sol");

const main = async () => {
  const input = await getInputFromServer(2);
  const prog = transform(input, ",", v => +v);
  const p1 = part1(prog);
  console.log("Part 1 - pos 0 value", p1);
  const p2 = part2(prog);
  console.log("Part 2 - input hash", p2);
};

main();
