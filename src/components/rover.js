import React from 'react'
import rover from '../rover.png'

export default function Rover({pos: {direction, position}}) {

    const calcPosition = p => p * 100

    const styles = {
        transform: `translate(${calcPosition(position.x)}%, ${calcPosition(position.y)}%) rotate(${direction * 90}deg)`
    }

    return (
        <div className="rover" style={styles}><img src={rover} alt="rover"/></div>
    )
}
