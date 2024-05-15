'use strict';
const path = require('path')
interface DirectoryHashmap {
    [key: string]: number;
}
export default {
    part1(file: string): number {
        // Implementation

        let file_split = file.split("\n")
        let current_directory = ""
        let directory_hashmap: DirectoryHashmap = {}
        let result = 0
        for (let i = 0; i < file_split.length; i++) {
            let split_line = file_split[i].split(" ")

            if (split_line[0] == "$" && split_line[1] == "cd") {
                current_directory = path.normalize(path.join(current_directory, split_line[2]))
            }

            if (!isNaN(parseInt(split_line[0]))) {
                const directory = current_directory.split("/");
                for (let i = 0; i < directory.length; i++) {
                    let dirPath = path.normalize(path.join(...directory.slice(0, i + 1)));
                    if (!directory_hashmap[dirPath]) {
                        directory_hashmap[dirPath] = 0;
                    }
                    directory_hashmap[dirPath] += parseInt(split_line[0]);
                }
            }
        }


        let values = Object.values(directory_hashmap)
        values = values.filter(item => {
            return item < 100000
        })

        return values.reduce((a, b) => a + b, 0)
    },

    part2(file: string): number {
        // Implementation
        let total_disk_space = 70000000
        let update_size = 30000000

        let file_split = file.split("\n")
        let current_directory = ""
        let directory_hashmap: DirectoryHashmap = {}
        let result = 0
        for (let i = 0; i < file_split.length; i++) {
            let split_line = file_split[i].split(" ")

            if (split_line[0] == "$" && split_line[1] == "cd") {
                current_directory = path.normalize(path.join(current_directory, split_line[2]))
            }

            if (!isNaN(parseInt(split_line[0]))) {
                const directory = current_directory.split("/");
                for (let i = 0; i < directory.length; i++) {
                    let dirPath = path.normalize(path.join(...directory.slice(0, i + 1)));
                    if (!directory_hashmap[dirPath]) {
                        directory_hashmap[dirPath] = 0;
                    }
                    directory_hashmap[dirPath] += parseInt(split_line[0]);
                }
            }
        }

        let space_left = total_disk_space - directory_hashmap["."]
        let space_needed_for_update = update_size - space_left
        
        let values = Object.values(directory_hashmap)
        let smallest = Infinity
        values.forEach(element => {
            if (Math.abs(space_needed_for_update - element) < Math.abs(space_needed_for_update - smallest)) {
                
                smallest = element
            }
        });
        
        return smallest
    }
};