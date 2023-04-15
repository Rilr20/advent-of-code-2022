use std::fs::File;
use std::io::prelude::*;

fn main() {
    let file_path = "./input.txt";

    let mut file = File::open(file_path).expect("Can't Open File!");
    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Oops can't read file sadface :(");

    let split = contents.split("\n");
    let rows: Vec<&str> = split.collect();
    let mut result = 0;
    let mut result_part2 = 0;
    let mut three: Vec<&str> = Vec::new();
    for row in rows {
        let mut half = row.split_at(row.len() / 2);
        // println!("first half: {}", half.0);
        // println!("second half: {}", half.1);
        if three.len() < 3 {
            three.push(row);
            if three.len() == 3 {
                result_part2 += find_duplicate_three(three);
                three = Vec::new();
            }
        }
        result += rucksack(&half.0, &half.1);
    }
    println!("result: {}", result);
    println!("result: {}", result_part2);
}

fn find_duplicate_three(group: Vec<&str>) -> u32 {
    // let char = 'c';
    // println!("{:?}", group);
    let mut res = 0;
    for char in group[0].chars() {
        if group[1].contains(char) && group[2].contains(char)  {
            // println!("{}", char);
            res = char_to_int(char);
            break;
        }
    }
    return res;
    // char_to_int(char)
}

fn rucksack(first_comp: &str, second_comp: &str) -> u32 {
    // println!("{}", first_comp);
    // println!("{}", second_comp);
    for char in first_comp.chars() {
        if second_comp.contains(char) {
            // println!("{}", char);
            let res = char_to_int(char);
            return res;
        }
    }
    // return "c";
    return 0;
}

fn char_to_int(char: char) -> u32 {
    let alphabet = ('a'..='z').into_iter().collect::<Vec<char>>();
    let mut num = 0;
    // let position = alphabet.iter().position(|&r| r.to_ascii_lowercase() == char.to_ascii_lowercase());
    num = alphabet
        .iter()
        .position(|&c| c == char.to_ascii_lowercase())
        .unwrap() as u32
        + 1;
    // num += position.unwrap_or(0);
    if char.is_uppercase() {
        // println!("upper case");
        num += 26;
    }
    num.try_into().unwrap()
}
