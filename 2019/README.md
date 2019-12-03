# Requirements

Nodejs (Tested on 11.10.1)

# Run solutions

Install deps `npm install`

There are 3 ways to run it against your own puzzle input

1. Create `creds.js` in the root project folder with a sessionId prop containing the
   cookie from https://adventofcode.com/ after logging in. A sample `creds.js` would look like:

```
export default {
  sessionId:
    "my session cookie" (don't include 'session=', just the value)
};

```

Then run

`node main.js`

This will fetch your input data from the Advent of Code site.

2. Create a `.txt` file with the input data inside the puzzle folder and run

`node main.js input.txt`

3. Create a `.js` file. This lets you store all test inputs in one file instead
   of having multiple text files with a single input in each.

Just change the line in `main.js` to run a specific input:

```
const { getInputFromFile, transform } = require("../utils.js");

const main = async () => {
  // replace this
  const input = await getInputFromServer(1);
  // with this
  const { test1: input } = await getInputFromFile(1, process.argv[2]); // puzzle day 1, test1 is exported from data.js
}
```

then run

`node main.js data.js`

# Run tests

Run all tests with `npm t`.
Run a specific day. Eg. day 1 `npm t '01/'`.
Run a specific test in a specific day. String value corresponds to the names given by the
describe and test blocks. Eg. `npm t -- -t '01 t1'`.

# Debugging tests

Add a VS code launch config:

```
  {
    "type": "node",
    "request": "attach",
    "name": "Attach",
    "port": 9229,
    "disableOptimisticBPs": true // fixes bug https://github.com/microsoft/vscode/issues/85644
  }
```

Run `npm test:debug` and then launch the above config.
