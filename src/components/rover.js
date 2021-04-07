import React from 'react'
import rover from '../rover.png'
import {useSelector} from 'react-redux'

export default function Rover() {

    const position = useSelector(state => state.option.position)
    const direction = useSelector(state => state.option.direction)

    const calcPosition = p => p * 100

    const styles = {
        transform: `translate(${calcPosition(position.x)}%, ${calcPosition(position.y)}%) rotate(${direction * 90}deg)`
    }

    return (
        <div className="rover" style={styles}><img src={rover} alt="rover"/></div>
    )
}
