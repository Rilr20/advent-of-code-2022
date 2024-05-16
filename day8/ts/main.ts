'use strict';

export default {
    part1(file: string): number {
        // Implementation
        let rows = file.split("\n")
        let visible_trees = 0
        let previous_tree = 0
        let array: string[] = []
        let index = 0

        // looking at it from the west  
        rows.forEach(row => {
            previous_tree = -1
            for (let i = 0; i < row.length; i++) {

                if (previous_tree < parseInt(row[i])) {
                    if (array.indexOf(`${i},${index}`) === -1) {
                        // array.push(`${i},${index}`)
                    }
                    visible_trees++;
                } else {

                    break
                }

                previous_tree = parseInt(row[i])
            }
            index++
        });

        // looking at it from the north
        //correct
        index = 0

        let rotation = rotateData(rows)
        rotation.forEach(y_position => {
            previous_tree = -1
            for (let x_position = 0; x_position < y_position.length; x_position++) {
                if (previous_tree < parseInt(y_position[x_position])) {
                    // console.log(y_position[x_position]);
                    if (array.indexOf(`${y_position.length - 1 - x_position},${index}`) === -1) {
                        // array.push(`${y_position.length - 1 - x_position},${index}`)
                    }
                }
                else {
                    break
                }

                previous_tree = parseInt(y_position[x_position])
            }
            index++
        })

        index = rows[0].length - 1

        // rotation = rotateData(rows)
        // console.log("rotation");
        //looking from the south
        rotation.forEach(y_position => {
            previous_tree = -1
            for (let x_position = y_position.length - 1; x_position > 0; x_position--) {

                if (previous_tree < parseInt(y_position[x_position])) {
                    console.log(y_position[x_position]);
                    if (array.indexOf(`${x_position},${index}`) === -1) {
                        // array.push(`${x_position},${index}`)
                    }
                }
                else {
                    break
                }
                previous_tree = parseInt(y_position[x_position])
            }
            index--
        })

        index = rows[0].length - 1
        // correct
        // rotation = rotateData(rotation)
        // console.log(rotation);
        
        //looking from the east
        rows.forEach(y_position => {
            previous_tree = -1
            for (let x_position = y_position.length - 1; x_position > 0; x_position--) {
                if (previous_tree < parseInt(y_position[x_position])) {
                    if (array.indexOf(`${x_position},${index}`) === -1) {
                        array.push(`${x_position},${index}`)

                    }
                }
                else {
                    break
                }

                previous_tree = parseInt(y_position[x_position])
            }
            index--
        })

        console.log(array);
        // rotateData(rows)
        return array.length

        function rotateData(data: string[]) {
            const rotation: string[] = []

            for (let i = 0; i < data[0].length; i++) {
                // const element = array[i];
                let row: string[] = []
                for (let j = 0; j < data.length; j++) {
                    row.push(data[j][i])

                }
                rotation.push(row.join(''))
            }
            // console.log(data);
            // console.log(rotation);
            return rotation
        }
    },
    part2(file: string): number {
        // Implementation

        return 0
    }
};