import {defaultGridSize} from '../config'

export default function calculatePosition(position, direction) {
    const newPosition = {...position}

    switch (Math.abs(direction % 4)) {
        case 0:
            if (position.x + 1 < defaultGridSize) {
                newPosition.x++
            }
            break
        case 1:
            if (position.y + 1 < defaultGridSize) {
                newPosition.y++
            }
            break
        case 2:
            if (position.x > 0) {
                newPosition.x--
            }
            break
        case 3:
            if (position.y > 0) {
                newPosition.y--
            }
            break
        default:
            break
    }
    return newPosition
}
