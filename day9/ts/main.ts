'use strict';

export default {
    part1(file: string): number {
        // Implementation
        /**
         * the head (H) and tail (T) must always be touching (diagonally adjacent and even overlapping both count as touching):
         */
        let rows = file.split("\n")
        let headXPosition: number = 0
        let headYPosition: number = 0
        let tailXPosition: number = 0
        let tailYPosition: number = 0
        let positionsVisited: string[] = []
        rows.forEach(row => {
            console.log(row)
            let key: string = row.split(" ")[0]
            let amount: number = parseInt(row.split(" ")[1])
            for (let i = 0; i < amount; i++) {
                console.log("key:" + key)
                console.log("amount:" + amount)
                console.log("i:" + i)
                switch (key) {
                    case "R":
                        headXPosition = headXPosition+ 1
                        break;
                    case "L":
                        headXPosition = headXPosition - 1
                        break;
                    case "U":
                        headYPosition = headYPosition + 1
                        break;
                    case "D":
                        headYPosition = headYPosition - 1
                        break;
                }
            // for (let i = 0; i < amount-1; i++) {
                positionToString(headXPosition, headYPosition);
                if (!tailRange(tailXPosition, tailYPosition, headXPosition, headYPosition)) {
                    console.log("I am not adjacent")
                    /**
                     * place tail position one behind the head, 
                     * if direction was up place -1 y
                     * if direction was down place +1 y
                     * if direction was right place -1 x
                     * if direction was left place +1 x
                    */
                    switch (key) {
                        case "R":
                            tailXPosition = tailXPosition + 1
                            break;
                        case "L":
                            tailXPosition = tailXPosition - 1
                            break;
                        case "U":
                            tailYPosition = tailYPosition + 1
                            break;
                        case "D":
                            tailYPosition = tailYPosition - 1
                            break;
                    }
                }

                // positionsVisited.push(positionToString(tailXPosition, tailYPosition))
            }

        })
        console.log(positionsVisited)
        console.log(positionsVisited.length)
        console.log("bitch");

        function tailRange(tailX: number, tailY: number, headX: number, headY: number, range: number = 1): boolean {
            let xInterval = [headX + range, headX, headX - range]
            let yInterval = [headY + range, headY, headY - range]
            if (xInterval.includes(tailX) && yInterval.includes(tailY)) {
                return true
            }
            return false
        }
        function positionToString(x: number, y: number): string {
            console.log(`${x},${y}`)
            return `${x},${y}`
        }
        return 0
    },
    part2(file: string): number {
        // Implementation

        return 0
    }
};