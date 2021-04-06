import {commands} from '../config'

export default function validateCommand(cmdStr) {
    return cmdStr
        .split('')
        .filter(char => Object.values(commands).includes(char))
        .join('')
}
