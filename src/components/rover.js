import React from 'react'

export default function Rover({pos, directionDeg}) {

    const calcPosition = pos => pos * 100 - 100
    
    const styles = {
        transform: `translate(${calcPosition(pos.x)}%, -${calcPosition(pos.y)}%) rotate(${directionDeg}deg)`
    }

    return (
        <div className="rover" style={styles}>Car</div>
    )
}
