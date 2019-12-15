const hasSameDigits = num => /(\d)\1/.test(num);

const hasTwoSameDigits = num => {
  const re = /(\d)\1(?!\1)/g;
  let m;
  while ((m = re.exec(num)) !== null) {
    const { index: matchIndex, input: numStr } = m;
    const [, digit] = m;
    const prevChar = numStr.charAt(matchIndex - 1);
    if (prevChar !== digit) return true;
  }
  return false;
};

const isMonotonic = num => {
  num = String(num);
  for (let i = 0; i < num.length - 1; i++) {
    if (num.charAt(i) > num.charAt(i + 1)) return false;
  }
  return true;
};

const findPasswords = (input, test) => {
  const [start, end] = input.split("-").map(v => +v);
  let valid = 0;
  for (let i = start; i <= end; i++) {
    if (test(i)) valid++;
  }
  return valid;
};

const p1 = input =>
  findPasswords(input, i => hasSameDigits(i) && isMonotonic(i));

const p2 = input =>
  findPasswords(input, i => hasTwoSameDigits(i) && isMonotonic(i));

module.exports = { p1, hasSameDigits, isMonotonic, hasTwoSameDigits, p2 };
