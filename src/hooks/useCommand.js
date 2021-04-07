import {commands} from '../config'
import {useSelector} from 'react-redux'
import calculatePosition from '../services/calculatePosition'

export default function useCommand() {

    const {position, direction} = useSelector(state => state.option)

    return function(command) {

        const newOption = {
            position: {...position},
            direction: direction
        }

        switch (command) {
            case commands.forward:
                newOption.position = calculatePosition(position, direction)
                break
            case commands.left:
                newOption.direction--
                break
            case commands.right:
                newOption.direction++
                break
            default:
                break
        }

        return newOption
    }
}
