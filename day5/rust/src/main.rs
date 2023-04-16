use std::fs::File;
use std::io::prelude::*;
fn main() {
    let file_path = "./input.txt";

    let mut file = File::open(file_path).expect("Can't Open File!");
    let mut contents = String::new();

    file.read_to_string(&mut contents)
        .expect("Oops can't read file sadface :(");

    // contents = contents.trim_start_matches('\u{feff}').to_string();

    let away = contents.split("\n\n");
    let away_with_nonsense: Vec<&str> = away.collect();

    let split = away_with_nonsense[1].split("\n");
    let rows: Vec<&str> = split.collect();

    let mut containers = vec![
        vec!["D", "B", "J", "V"],
        vec!["P", "V", "B", "W", "R", "D", "F"],
        vec!["R", "G", "F", "L", "D", "C", "W", "Q"],
        vec!["W", "J", "P", "M", "L", "N", "D", "B"],
        vec!["H", "N", "B", "P", "C", "S", "Q"],
        vec!["R", "D", "B", "S", "N", "G"],
        vec!["Z", "B", "P", "M", "Q", "F", "S", "H"],
        vec!["W", "L", "F"],
        vec!["S", "V", "F", "M", "R"],
    ];
    let mut containers2 = vec![
        vec!["D", "B", "J", "V"],
        vec!["P", "V", "B", "W", "R", "D", "F"],
        vec!["R", "G", "F", "L", "D", "C", "W", "Q"],
        vec!["W", "J", "P", "M", "L", "N", "D", "B"],
        vec!["H", "N", "B", "P", "C", "S", "Q"],
        vec!["R", "D", "B", "S", "N", "G"],
        vec!["Z", "B", "P", "M", "Q", "F", "S", "H"],
        vec!["W", "L", "F"],
        vec!["S", "V", "F", "M", "R"],
    ];
    let mut count:u32;
    let mut from:u32;
    let mut to:u32;
    for command in rows {
        // println!("command: {:?}", containers);
        // print2darray(&containers);
        let split_count:&str = command.split("move ").nth(1).unwrap().split(" from ").nth(0).unwrap();
        let split_from:&str = command.split(" from ").nth(1).unwrap().split(" to ").nth(0).unwrap();
        let split_to:&str = command.split(" to ").nth(1).unwrap();
        count = split_count.parse::<u32>().unwrap();
        from = split_from.parse::<u32>().unwrap();
        to = split_to.parse::<u32>().unwrap();
        containers = container_move(containers, count, from-1, to-1);
        containers2= container_move_9001(containers2, count, from-1, to-1);
    }
    let mut string = get_last_in_each_group(containers);
    println!("part 1: {}", string);
    string = get_last_in_each_group(containers2);
    println!("part 2: {}", string);
}

fn get_last_in_each_group(mut containers: Vec<Vec<&str>> )->String {
    let mut return_string = String::new();
    for i in 0..containers.len()  {
        return_string = return_string + containers[i].pop().unwrap();
    }
    return return_string;
}
fn container_move(mut containers: Vec<Vec<&str>>, count: u32, from: u32, to: u32)->Vec<Vec<&str>> {
    print!("move {} from {} to {}", count,from,to);
    for i in 0..count {
        println!("from: {:?}", containers[from as usize]);
        //remove from vector
        //save last element
        // let mut tmp = containers[from as usize].last().copied().unwrap();
        let tmp = containers[from as usize].pop().unwrap();
        //add tmp to last place in vector
        // containers[to as usize][containers[to as usize].len()] = tmp;
        containers[to as usize].push(tmp);
        println!("to: {:?}", containers[to as usize]);
    }
    return containers
}
fn container_move_9001(mut containers: Vec<Vec<&str>>, count: u32, from: u32, to: u32)->Vec<Vec<&str>> {
    print!("move {} from {} to {}", count,from,to);
    let mut new_arrangement =Vec::<&str>::new();
    for i in 0..count {
        println!("from: {:?}", containers[from as usize]);
        //remove from vector
        //save last element
        // let mut tmp = containers[from as usize].last().copied().unwrap();
        new_arrangement.push(containers[from as usize].pop().unwrap());
        // let tmp = containers[from as usize].pop().unwrap();
        //add tmp to last place in vector
        // containers[to as usize][containers[to as usize].len()] = tmp;
        println!("to: {:?}", containers[to as usize]);
    }
    new_arrangement.reverse();
    for i in 0..new_arrangement.len(){
        containers[to as usize].push(new_arrangement[i]);
    }
    return containers;
}
