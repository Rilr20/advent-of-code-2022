// rustc compiler
// run by ./filename

// use std::env;
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut calories:Vec<&u32> = Vec::new();
    let file_path = "../input.txt";
    println!("In file {}", file_path);

    let mut file = File::open(file_path).expect("Can't Open File!");

    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Oops can't read file sadface :(");

    let split = contents.lines();
    let elves: Vec<&str> = split.collect();

    let mut current_calories: u32 = 0;
    for calorie in elves {
        if calorie != "" {
            println!("{}", calorie);
            *&mut current_calories = &current_calories + &calorie.parse::<u32>().unwrap();
        } else {
            print!("empty row\n");
            calories.push(&current_calories);
            *&mut current_calories = 0;
        }
    }

    println!("{:?}", calories);
}

