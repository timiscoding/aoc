# Requirements

Any node version with ES module support works. (Tested on node 11.10.1).

# Run solutions

Install deps `npm install`.

There are 2 ways to run it against your own puzzle input,

1. Create `creds.js` in the root project folder with a sessionId prop containing the
   cookie from https://adventofcode.com/ after logging in. A sample `creds.js` would look like:

```
export default {
  sessionId:
    "my session cookie" (don't include 'session=', just the value)
};

```

Then run node with ES modules support

`node --experimental-modules 01/sol.mjs`

This will fetch your input data from the Advent of Code site.

2. Create a file with the input data inside the puzzle folder and run

`node --experimental-modules 01/sol.mjs 01/input.txt`
