import fs from "fs";
const filename = process.argv[2];

if (process.argv.length < 3) process.exit(1);

const input = fs.readFileSync(filename, "utf8");

let elves: number[] = []; 
const additions: number[] = [];

input.split("\r\n").forEach((data) => {
    if (data === '') {        
        additions.push(elves.reduce((val, val2) => val + val2))
        elves = [];
        return;
    }
    elves.push(Number(data))
});

console.log(Math.max(...additions));