// Rock    A   1p
// Paper   B   2p
// Scissor C   3p
// Win     6
// Draw    3
// Loss    0
// X means lose
// Y means draw
// Z means win


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
    // console.log("row is " + row);
    if (row !== "") {
        let opponent = row[0]
        let you = row[2]
        score += calculateScore(opponent, you);
    }
});

function calculateScore(opponent, you) {
    let opponentType = ["A", "B", "C"]
    let roundScore = 0;
    switch (you) {
        case "X":
            roundScore = 0
            break;
        case "Y":
            roundScore = 3
            break;
        case "Z":
            roundScore = 6
            break;
        default:
            break;
    }


    // let youType = ["X", "", "", "Y", "", "", "Z"];
    // let opponentTypeScore = opponentType.indexOf(opponent) + 1
    // let roundScore = youType.indexOf(you);

    switch (opponent) {
        case "A":
            if (you == "X") { // Lose
                roundScore += 3
            } else if (you == "Y") { // Draw
                roundScore += 1
            } else if (you == "Z") { // Win
                roundScore += 2
            }
            console.log(roundScore);
            break;
        case "B":
            if (you == "X") { // Lose
                roundScore += 1
            } else if (you == "Y") { // Draw
                roundScore += 2
            } else if (you == "Z") { // Win
                roundScore += 3
            }
            console.log(roundScore);
            break;
        case "C":
            if (you == "X") { // Lose
                roundScore += 2
            } else if (you == "Y") { // Draw
                roundScore += 3
            } else if (you == "Z") { // Win
                roundScore += 1
            }
            console.log(roundScore);
            break;
    }
    console.log(roundScore);
    return roundScore
}


console.log(score);
