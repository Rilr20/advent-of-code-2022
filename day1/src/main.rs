// rustc compiler
// run by ./filename

use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut calories:Vec<u32> = Vec::new();
    let file_path = "../input.txt";

    let mut file = File::open(file_path).expect("Can't Open File!");
    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Oops can't read file sadface :(");

    let split = contents.split("\n\n");
    let elves: Vec<&str> = split.collect();

    for calorie_list in elves {
        calories.push(sum_all_items(calorie_list));
    }

    calories.sort_by(|a, b| b.cmp(a));
    println!("{}", calories[0]);
    let mut top_three_sum = 0;
    for i in 0..3 {
        top_three_sum += calories[i];
    }
    println!("{}", calories[0]);
    println!("{}", top_three_sum);
}

fn sum_all_items(items:&str) -> u32 {
    let split = items.split("\n");
    let itemvector: Vec<&str> = split.collect();
    let mut sum_of_items = 0; 
    for item in itemvector {
        let converted_to_int: u32 = item.parse().unwrap();
        sum_of_items += converted_to_int;
    }
    return sum_of_items
}

