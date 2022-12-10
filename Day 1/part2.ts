import fs from "fs";
const filename = process.argv[2];

if (process.argv.length < 3) process.exit(1);

let counter = 1;
const inventory = fs.readFileSync(filename, "utf8");
const elves: Map<string, number[]> = new Map();

inventory.split("\r\n").forEach((data) => {
  if (data === "") return ++counter;
  const alreadyIn = elves.get(`elf-${counter}`);

  if (alreadyIn != null) {
    alreadyIn.push(Number(data.replace("\r\n", "")));
    elves.set(`elf-${counter}`, alreadyIn);
  } else {
    elves.set(`elf-${counter}`, [Number(data.replace("\r\n", ""))]);
  }
});

const temp = [];

for (const [, value] of elves) {
  temp.push(value.reduce((a, b) => a + b));
}

const largestInv = Math.max(...temp);

// addition of top 3 largest inventories after they are added
const top3 = temp.sort((a, b) => b - a).slice(0, 3);

// addition of top 3 invs
const addedTop3 = top3.reduce((a, b) => a + b);

console.log(addedTop3);
