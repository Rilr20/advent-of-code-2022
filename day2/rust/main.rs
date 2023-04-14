use std::fs::File;
use std::io::prelude::*;
use std::convert::TryInto;
// Rock    A   X    1
// Paper   B   Y    2
// Scissor C   Z    3
// Win     6
// Draw    3
// Loss    0

fn main() {
    let file_path = "./input.txt";

    let mut file = File::open(file_path).expect("Can't Open File!");
    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Oops can't read file sadface :(");

    // cut on new line

    let rows: Vec<&str> = contents.lines().collect();
    // let rows: Vec<&str> = split.collect();

    let mut points = 0;
    for i in rows {
        // println!("item: {}", i);

        let mut splittext = i.split(" ");
        let rowvec: Vec<&str> = splittext.collect();
        points += calculate_score(rowvec[0], rowvec[1]);
        // if rowvec.len() > 1 {
        //     match rowvec[1] {
        //         "X" => {
        //             match rowvec[0] {
        //             "A" => {points += 4;}
        //             "C" => {points += 7;} 
        //             &_ => {points += 1;}
        //         }}
        //         "Y" => {
        //             match rowvec[1] {
        //             "A" => {points += 8;} 
        //             "B" => {points += 5;}
        //             &_ => {points += 2;}
        //         }}
        //         "Z" => {
        //             match rowvec[1] {
        //             "B" => {points += 0;}
        //             "C" => {points += 6;}
        //             &_ => {points += 3;}
        //         }},
        //         &_ => {println!("asdgd");}
        //     }
        // }
        // *i *= 2;
        // i+= 1;
    }   
    println!("points: {}", points);
    let rows2: Vec<&str> = contents.lines().collect();
    
    let result = part2(&rows2);
    println!("part 2 points: {}", result); 

    // match 
}
fn calculate_score(opponent:&str, you:&str)->u32 {
    println!("opponent: {}",opponent);
    println!("you: {}",you);
    let opponent_type = ["A", "B", "C"];
    let you_type = ["X", "Y", "Z"];

    let round_score = you_type.iter().position(|&x| x == you).unwrap() + 1;

    let mut score = round_score;

    if opponent == "A" && you == "Y"
        || opponent == "B" && you == "Z"
        || opponent == "C" && you == "X"
    {
        score += 6;
    } else if opponent_type.iter().position(|&x| x == opponent) == you_type.iter().position(|&x| x == you) {
        score += 3;
    }

    score.try_into().unwrap()
}
fn part2(rows: &Vec<&str>)->u32 {
    // second column says outcome
    // X LOSS
    // Y DRAW
    // Z WIN
    let mut score = 0; 
    for i in rows {
        let splittext = i.split(" ");
        let rowvec: Vec<&str> = splittext.collect();
        // println!("haj");
        match rowvec[1] {
            "X" => {
                score += 0;
            }
            "Y" => {
                score += 3;
            }
            "Z" => {
                score += 6;
            },
            &_ => {println!("asdgd");}
        }
        match rowvec[0] {
            "A" => {
                if rowvec[1] == "X" { // Lose
                    score += 3
                } else if rowvec[1] == "Y" { // Draw
                    score += 1
                } else if rowvec[1] == "Z" { // Win
                    score += 2
                }
            }
            "B" => {
                if rowvec[1] == "X" { // Lose
                    score += 1
                } else if rowvec[1] == "Y" { // Draw
                    score += 2
                } else if rowvec[1] == "Z" { // Win
                    score += 3
                }
            }
            "C" => {
                if rowvec[1] == "X" { // Lose
                    score += 2
                } else if rowvec[1] == "Y" { // Draw
                    score += 3
                } else if rowvec[1] == "Z" { // Win
                    score += 1
                }
            }
            &_ => {println!("asdgd");}
        }
    }
    return score;
}