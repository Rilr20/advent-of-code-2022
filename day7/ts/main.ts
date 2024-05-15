'use strict';
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

            if (split_line[0] === "$" && split_line[1] === "cd") {
                if (split_line[2] === "..") {
                    let find = current_directory.match(/^(.*)\//);
                    if (find !== null) {
                        if (find[1] == "") {
                            current_directory = "/"
                        } else {
                            current_directory = find[1]
                        }
                    }
                } else {
                    if (current_directory == "/" || current_directory === "") {
                        current_directory = current_directory + split_line[2]
                    } else {
                        current_directory = current_directory + "/" + split_line[2]
                    }
                }
            }

            if (!isNaN(parseInt(split_line[0]))) {
                let directories = current_directory.match(/([a-z]*)/g)
                if (directories !== null) {

                    for (let i = 0; i < directories.length; i++) {
                        if (directories[i] !== '' || directories[i] === '' && i === 1) {
                            let path = "/"
                            directories.slice(0, i+1).forEach(item => {
                                if (item !== '') {
                                    if (path === "/") {
                                        path += item
                                    } else {
                                        path += "/" + item
                                    }
                                }
                            })
                            if (directory_hashmap[path] === undefined) {
                                directory_hashmap[path] = 0
                            }
                            directory_hashmap[path] += parseInt(split_line[0])
                        }
                    }
                }
            }
         }
        }
   
        let values = Object.values(directory_hashmap)
        values = values.filter(item => {
            return item < 100000
        })
        
        return values.reduce((a,b) => a+b, 0)
    },
    part2(file: string): number {
        // Implementation

        return 0
    }
};