import React from 'react'
import {commands} from '../config'
import {useDispatch, useSelector} from 'react-redux'
import {turnLeft, turnRight} from '../app/reducers/optionReducer'
import useMove from './useMove'

export default function useCommand() {

    const {position, direction} = useSelector(state => state.option)
    const dispatch = useDispatch()
    const moveForward = useMove()
    console.log('init')

    return function(cmd) {
        console.log('running')
        switch (cmd) {
            case commands.forward:
                moveForward(position, direction)
                break
            case commands.left:
                dispatch(turnLeft())
                break
            case commands.right:
                dispatch(turnRight())
                break
            default:
                break
        }
    }
}
