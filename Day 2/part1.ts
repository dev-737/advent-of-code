import fs from "fs";
const filename = process.argv[2];

if (process.argv.length < 3) process.exit(1);

enum OpponentMoves {
  Rock = "A",
  Paper = "B",
  Scissors = "C",
}

enum MyMoves {
  Rock = "X",
  Paper = "Y",
  Scissors = "Z",
}

const result = fs.readFileSync(filename, "utf8");
const clean = result.trim().split("\n");

let myScore = 0;

for (let i = 0; i < clean.length; i++) {
  const moves = clean[i].trim().split(" ");

  const me = moves[1];
  const opponent = moves[0];
  
  if (me === MyMoves.Rock) myScore += 1;
  if (me === MyMoves.Paper) myScore += 2;
  if (me === MyMoves.Scissors) myScore += 3

  
   if (
    (opponent === OpponentMoves.Rock && me === MyMoves.Rock) ||
    (opponent === OpponentMoves.Paper && me === MyMoves.Paper) ||
    (opponent === OpponentMoves.Scissors && me === MyMoves.Scissors)
  )
    myScore += 3; 
  
  else if (
    (opponent === OpponentMoves.Rock && me === MyMoves.Paper) ||
    (opponent === OpponentMoves.Paper && me === MyMoves.Scissors) ||
    (opponent === OpponentMoves.Scissors && me === MyMoves.Rock)
  )
    myScore += 6;
}

console.log(myScore);
