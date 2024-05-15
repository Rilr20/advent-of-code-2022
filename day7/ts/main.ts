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
        for (let i = 0; i < file_split.length; i++) {
            const element = file_split[i];
            const split_element = element.split(" ")
            if (element.indexOf("cd") !== -1) {
                if (element.indexOf('..') !== -1 && element !== "$ cd /") {

                    let split = current_directory.split("/")
                    split = split.splice(0, split.length - 2)

                    current_directory = split.join("/") + "/"


                } else if (element === "$ cd /") {
                    current_directory = "/"
                } else {

                    current_directory += element.split(" ")[2] + "/"
                }
            }
            if (!Number.isNaN(Number(split_element[0]))) {
                // console.log(Number(split_element[0]));
                if (directory_hashmap[current_directory] === undefined) {

                    directory_hashmap[current_directory] = 0
                }
                directory_hashmap[current_directory] += Number(split_element[0])
            }

        }
        console.log(directory_hashmap);
        

        // Calculate upper directory size.
        Object.entries(directory_hashmap).forEach(item => {
            const [key, value] = item
            // console.log(key);
            Object.entries(directory_hashmap).forEach(item2 => {
                const [key2, value2] = item2
                // console.log(item);
                if (key !== key2 && key2.indexOf(key) !== -1) {
                    directory_hashmap[key] += value2
                }



            })
        })

        let result = 0 
        Object.entries(directory_hashmap).forEach(item => {
            const [key, value] = item
            if (value < 100000) {
                result += value
            }
        })
        // console.log(filteredMap);
        
        return result
    },
    part2(file: string): number {
        // Implementation

        return 0
    }
};