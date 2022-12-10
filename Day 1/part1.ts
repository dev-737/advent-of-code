import fs from "fs";
const filename = process.argv[2];

if (process.argv.length < 3) process.exit(1);

let counter = 1;
const inventory = fs.readFileSync(filename, "utf8");
const elves: Map<string, number[]> = new Map();

inventory.split("\r\n").forEach((data) => {
  console.log(data);
  
  if (data === "") return ++counter;
  const alreadyIn = elves.get(`elf-${counter}`);

  if (alreadyIn) {
    alreadyIn.push(Number(data.replace("\r\n", "")));
    elves.set(`elf-${counter}`, alreadyIn);
  } else {
    elves.set(`elf-${counter}`, [Number(data.replace("\r\n", ""))]);
  }
});

const temp = [];

for (let [key, value] of elves) {
  temp.push(value.reduce((a, b) => a + b));
}

console.log(Math.max(...temp));
