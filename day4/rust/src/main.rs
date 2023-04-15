use std::fs::File;
use std::io::prelude::*;
fn main() {
    let file_path = "./input.txt";

    let mut file = File::open(file_path).expect("Can't Open File!");
    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Oops can't read file sadface :(");

    contents = contents.trim_start_matches('\u{feff}').to_string();

    let split = contents.split("\n");
    let rows: Vec<&str> = split.collect();
    // println!("{:?}", rows);
    let mut count = 0;
    let mut count_part2 = 0;
    for row in rows {
        let row_split = row.split(",");
        let sections: Vec<&str> = row_split.collect();
        if inside_range(sections[0], sections[1]) {
            count += 1;
        }
        if overlap(sections[0], sections[1]) {
            count_part2 += 1;
        }
    }
    println!("part 1: {}", count);
    println!("part 2: {}", count_part2);
}

fn inside_range(first:&str, second:&str) ->bool {
    let first_vec: Vec<u32> = first.split('-').map(|s| s.parse::<u32>().unwrap_or(0)).collect();
    let second_vec: Vec<u32> = second.split('-').map(|s| s.parse::<u32>().unwrap_or(0)).collect();
    let first_start = first_vec[0];
    let first_end = first_vec[1];
    let second_start = second_vec[0];
    let second_end = second_vec[1];
    
    if first_start <= second_start && first_end >= second_end ||
        second_start <= first_start && second_end >= first_end {
            return true;
        }
    false
}

fn overlap(first:&str, second:&str)->bool {
    // println!("first:{}second:{}", first, second);

    let first_vec: Vec<u32> = first.split('-').map(|s| s.parse::<u32>().unwrap_or(0)).collect();
    let second_vec: Vec<u32> = second.split('-').map(|s| s.parse::<u32>().unwrap_or(0)).collect();
    let first_start = first_vec[0];
    let first_end = first_vec[1];
    let second_start = second_vec[0];
    let second_end = second_vec[1];

    // println!("{}", first_start);
    
    if first_end >= second_start && first_start <= second_end ||
    second_end >= first_start && second_end <= first_end {
        return true
    }
    false
}