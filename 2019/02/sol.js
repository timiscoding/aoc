const run = prog => {
  for (let i = 0; prog[i] !== 99; i += 4) {
    const [opcode, a1, a2, a3] = prog.slice(i, i + 4);
    if (opcode === 1) {
      prog[a3] = prog[a1] + prog[a2];
    }
    if (opcode === 2) {
      prog[a3] = prog[a1] * prog[a2];
    }
  }
  return prog;
};

const setInputs = (prog, noun, verb) => {
  const progCopy = [...prog];
  progCopy[1] = noun;
  progCopy[2] = verb;
  return progCopy;
};

const part1 = prog => {
  // procedure to revert program to working state
  const workingProg = setInputs(prog, 12, 2);
  return run(workingProg)[0];
};

const part2 = prog => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const p = setInputs(prog, noun, verb);
      const a0 = run(p)[0];
      if (a0 === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};

module.exports = { run, part1, part2 };
