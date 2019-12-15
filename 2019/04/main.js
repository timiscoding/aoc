const { p1, p2 } = require("./sol");

const INPUT = "372304-847060";

const main = () => {
  console.log("Part 1 - valid passwords:", p1(INPUT));
  console.log("Part 2 - valid passwords:", p2(INPUT));
};

main();
