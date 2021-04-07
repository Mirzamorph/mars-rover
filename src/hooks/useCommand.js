import React from 'react'
import {commands} from '../config'
import {useDispatch} from 'react-redux'
import {turnLeft, turnRight} from '../app/reducers/optionReducer'
import useMove from './useMove'

export default function useCommand() {

    const dispatch = useDispatch()
    const moveForward = useMove()
    console.log('init')

    return function(letters) {
        console.log('running')
        letters.split('').forEach((l, i) => {
            setTimeout(() => {
                switch (l) {
                    case commands.forward:
                        moveForward()
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
            }, 300 * i)
        })
    }
}
