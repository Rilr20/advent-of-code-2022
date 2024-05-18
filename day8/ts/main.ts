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

        return 0
    }
};