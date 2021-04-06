import React from 'react'

export default function Rover({pos}) {

    const styles = {
        transform: `translate(${pos.x * 100}%, ${pos.y * 100}%)`
    }

    return (
        <div className="rover" style={styles}>Car</div>
    )
}
