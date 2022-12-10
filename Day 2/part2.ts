import fs from "fs";
const filename = process.argv[2];

if (process.argv.length < 3) process.exit(1);

const OpponentMoves = {
  Rock: "A",
  Paper: "B",
  Scissors: "C",
}

const outcome = {
  Lose: "X",
  Draw: "Y",
  Win: "Z",
}

const result = fs.readFileSync(filename, "utf8");
const clean = result.trim().split("\n");

let myScore = 0;

for (let i = 0; i < clean.length; i++) {
  const moves = clean[i].trim().split(" ");

  let me = moves[1];
  const opponent = moves[0];
  
  if (me === outcome.Lose) {
	  if (opponent === OpponentMoves.Rock) myScore += 3;
	  else if (opponent === OpponentMoves.Paper) myScore += 1; 
	  else if (opponent === OpponentMoves.Scissors) myScore += 2; 
  }

  else if (me === outcome.Draw) {
	  myScore += 3;
	  if (opponent === OpponentMoves.Rock) myScore += 1;
	  else if (opponent === OpponentMoves.Paper) myScore += 2; 
	  else if (opponent === OpponentMoves.Scissors) myScore += 3; 
    }
  else if (me === outcome.Win) {
	  myScore += 6;
	  if (opponent === OpponentMoves.Rock) myScore += 2;
	  else if (opponent === OpponentMoves.Paper) myScore += 3; 
	  else if (opponent === OpponentMoves.Scissors) myScore += 1; 
  }
}

console.log(myScore);
