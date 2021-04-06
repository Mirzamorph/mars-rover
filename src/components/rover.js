import React from 'react'

export default function Rover({pos, directionDeg}) {

    const calcPosition = p => p * 100

    const styles = {
        transform: `translate(${calcPosition(pos.x)}%, ${calcPosition(pos.y)}%) rotate(${directionDeg * 90}deg)`
    }

    return (
        <div className="rover" style={styles}>Car</div>
    )
}
