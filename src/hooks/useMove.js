import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {defaultGridSize} from '../config'
import {setX, setY} from '../app/reducers/optionReducer'

export default function useMove() {
    const {position, direction} = useSelector(state => state.option)
    const dispatch = useDispatch()

    return function() {
        switch (Math.abs(direction % 4)) {
            case 0:
                if (position.x + 1 < defaultGridSize) {
                    dispatch(setX(position.x + 1))
                }
                break
            case 1:
                if (position.y + 1 < defaultGridSize) {
                    dispatch(setY(position.y + 1))
                }
                break
            case 2:
                if (position.x > 0) {
                    dispatch(setX(position.x - 1))
                }
                break
            case 3:
                if (position.y > 0) {
                    dispatch(setY(position.y - 1))
                }
                break
            default:
                break
        }
    }
}
