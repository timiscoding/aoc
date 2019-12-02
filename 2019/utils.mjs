import fetch from "node-fetch";
import fs from "fs";
import creds from "./creds.mjs";

export const getInput = async (day, path) => {
  let input;
  if (path) {
    input = fs.readFileSync(path, { encoding: "utf8" });
  } else {
    input = await fetchPuzzleInput(day);
  }
  return input.split("\n").filter(v => v !== "");
};

export const fetchPuzzleInput = async day => {
  if (!creds.sessionId) {
    throw Error("sessionId not found in creds.mjs");
  }
  const url = `https://adventofcode.com/2019/day/${day}/input`;
  const data = await fetch(url, {
    headers: {
      cookie: `session=${creds.sessionId};`
    }
  });
  return await data.text();
};
