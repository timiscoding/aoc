const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const creds = require("./creds.js");

const transform = (str, sep, map = v => v) => {
  return str
    .split(sep)
    .filter(v => v !== "")
    .map(map);
};

const getInputFromFile = (day, pathname) => {
  return path.extname(pathname) === ".js"
    ? require(`./${String(day).padStart(2, "0")}/${pathname}`)
    : fs.readFileSync(pathname, { encoding: "utf8" });
};

const getInputFromServer = async day => {
  if (!creds.sessionId) {
    throw Error("sessionId not found in creds.js");
  }
  const url = `https://adventofcode.com/2019/day/${day}/input`;
  const data = await fetch(url, {
    headers: {
      cookie: `session=${creds.sessionId};`
    }
  });
  return await data.text();
};

module.exports = { getInputFromServer, getInputFromFile, transform };
