'use strict';
// Rock    A   X    1
// Paper   B   Y    2
// Scissor C   Z    3
// Win     6
// Draw    3
// Loss    0


const fs = require("fs");
let score = 0;
let documentstring = "";

// fs.readFile("input.txt", (err, data) => {
//     documentstring = data.toString();
//     console.log(documentstring);

// });


function myfun(filePath) {
    return fs.readFileSync(filePath);
}
let res = myfun('input.txt')
documentstring = res.toString();


let documentRow = documentstring.split("\n")
// console.log(documentRow);

documentRow.forEach(row => {
    console.log("row is " + row);
    if (row !== "") {
        let opponent = row[0]
        let you = row[2]
        score += calculateScore(opponent, you);
    }
});

function calculateScore(opponent, you) {
    let opponentType = ["A", "B", "C"]
    let youType = ["X", "Y", "Z"];
    // let opponentTypeScore = opponentType.indexOf(opponent) + 1
    let roundScore = youType.indexOf(you) + 1;
    console.log("lets start");

    console.log(youType.indexOf(you) + 1);

    console.log(roundScore);

    // let roundScore = youTypeScore;

    //wins
    if (
        opponent == "A" && you == "Y" ||
        opponent == "B" && you == "Z" ||
        opponent == "C" && you == "X"
    ) {
        roundScore += 6
    } else if (opponentType.indexOf(opponent) == youType.indexOf(you)) {
        roundScore += 3
    }

    return roundScore
}

console.log(score);
