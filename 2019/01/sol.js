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

module.exports = { part1, part2 };
