const { getInputFromServer, transform } = require("../utils.js");
const { part1, part2 } = require("./sol");

const main = async () => {
  const input = await getInputFromServer(1);
  const masses = transform(input, "\n");
  const p1 = part1(masses);
  console.log("Part 1 - Total fuel:", p1);
  const p2 = part2(masses);
  console.log("Part 2 - Total fuel:", p2);
};

main();
