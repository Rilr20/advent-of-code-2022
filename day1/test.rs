fn main() {
    const LEN: usize = 5;
    let mut arr: [u32; LEN];

    for i in 0..LEN {
        arr[i] = fib(i as u32);
    }

    println!("{:?}", arr);
}

fn fib(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fib(n - 1) + fib(n - 2),
    }
}