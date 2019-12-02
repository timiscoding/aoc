import { getInput } from "../utils.mjs";

const getFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const getAdditionalFuel = mass => {
  let curFuel = getFuel(mass);
  let fuel = 0;
  while (curFuel > 0) {
    fuel += curFuel;
    curFuel = getFuel(curFuel);
  }
  return fuel;
};

const fuelSum = (masses, getModuleFuel) =>
  masses.reduce((sum, mass) => {
    return sum + getModuleFuel(mass);
  }, 0);

const part1 = masses => {
  return fuelSum(masses, getFuel);
};

const part2 = masses => {
  return fuelSum(masses, getAdditionalFuel);
};

const main = async () => {
  const [, , path] = process.argv;
  const masses = await getInput(1, path);
  const p1 = part1(masses);
  console.log("Part 1 - Total fuel:", p1);
  const p2 = part2(masses);
  console.log("Part 2 - Total fuel:", p2);
};

main();
