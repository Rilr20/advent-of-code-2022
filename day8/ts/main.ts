'use strict';

export default {
    part1(file: string): number {
        // Implementation
        let rows = file.split("\n")
        let previous_tree = 0
        let array: string[] = []
        let index = 0

        // looking at it from the west  
        rows.forEach(row => {
            previous_tree = -1
            for (let i = 0; i < row.length; i++) {
                if (previous_tree < parseInt(row[i])) {
                    if (array.indexOf(`${i},${index}`) === -1) {
                        array.push(`${i},${index}`)
                    }
                }
                if (previous_tree < parseInt(row[i])) {
                    previous_tree = parseInt(row[i])
                }
            }
            index++
        });

        index = 0
        
        // looking at it from the north
        rows.forEach(y_position => {

            previous_tree = -1
            for (let x_position = 0; x_position < y_position.length; x_position++) {
                if (previous_tree < parseInt(rows[x_position][index])) {
                    if (array.indexOf(`${index},${x_position}`) === -1) {
                        array.push(`${index},${x_position}`)
                    }
                }
                if (previous_tree < parseInt(rows[x_position][index])) {
                    previous_tree = parseInt(rows[x_position][index])
                }
            }
            index++
        })

        index = rows[0].length - 1

        //looking from the south
        rows.forEach(y_position => {
            previous_tree = -1
            for (let x_position = y_position.length - 1; x_position >= 0; x_position--) {
                if (previous_tree < parseInt(rows[x_position][index])) {
                    if (array.indexOf(`${index},${x_position}`) === -1) {
                        array.push(`${index},${x_position}`)
                    }
                }
                if (previous_tree < parseInt(rows[x_position][index])) {
                    previous_tree = parseInt(rows[x_position][index])
                }
            }
            index--
        })

        index = rows[0].length - 1

        //looking from the east
        let highest_tree = 0
        rows.forEach(y_position => {
            highest_tree = -1
            for (let x_position = y_position.length - 1; x_position >= 0; x_position--) {
                if (highest_tree < parseInt(y_position[x_position])) {
                    if (array.indexOf(`${x_position},${y_position.length - 1 - index}`) === -1) {
                        array.push(`${x_position},${y_position.length - 1 - index}`)

                    }
                }
                if (highest_tree < parseInt(y_position[x_position])) {
                    highest_tree = parseInt(y_position[x_position])
                }
            }
            index--
        })
        // console.log(array);

        return array.length

    },
    part2(file: string): number {
        // Implementation
        let rows = file.split("\n")
        let returnValue = 0
        for (let y_position = 0; y_position < rows.length; y_position++) {
            for (let x_position = 0; x_position < rows[y_position].length; x_position++) {
                let count = checkTrees(rows, x_position, y_position)
                if (count > returnValue) {
                    return count
                }
            }
        }

        return returnValue
    
        function checkTrees(rows: string[], x:number, y:number) {
            let bool_1 = false // up
            let bool_2 = false // down
            let bool_3 = false // left
            let bool_4 = false // right
            let count_1 = 0
            let count_2 = 0
            let count_3 = 0
            let count_4 = 0
            for (let i = 0; i < rows.length; i++) {
                // const element = array[i];
                if (!bool_1 && x+i >= 0 && rows[y][x+1] < rows[y][x]) {
                    count_1 ++
                } else {
                    bool_1 = true
                }

                if (!bool_2) {
                    count_2++
                } else {
                    bool_2 = true
                }

                if (bool_1 && bool_2 && bool_3 && bool_4) {
                    break
                }
            }

            return count_1 * count_2 * count_3 * count_4
        }
    }

};