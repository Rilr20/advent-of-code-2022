'use strict';

export default {
    part1(file: string):number {
        // four character that are all different
        let position = 0
        for (let i = 0; i < file.length; i++) {
            let check = true
            let four_chars = file.slice(i, i+4);
            // console.log(four_chars.length);
            if (four_chars.length == 4) {
                let chars: string[]
                for (let char = 0; char < four_chars.length; char++) {
                    let duplicate =four_chars.slice(char+1, four_chars.length).indexOf(four_chars[char])
                    if (duplicate !== - 1) {
                        check = false
                    }
                }
                if (check) {
                    position = i + 4
                }
            }
            if (check) {
                break
            }
        }
        return position
    },
    part2(file:string):number {
        // Implementation
        let position = 0
        for (let i = 0; i < file.length; i++) {
            let check = true
            let four_chars = file.slice(i, i+14);
            // console.log(four_chars.length);
            if (four_chars.length == 14) {
                let chars: string[]
                for (let char = 0; char < four_chars.length; char++) {
                    let duplicate =four_chars.slice(char+1, four_chars.length).indexOf(four_chars[char])
                    if (duplicate !== - 1) {
                        check = false
                    }
                }
                if (check) {
                    position = i + 14
                }
            }
            if (check) {
                break
            }
        }
        return position
    }
};