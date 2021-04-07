import React, {useEffect, useState} from 'react'
import validateCommand from '../services/validateCommand'
import useCommand from '../hooks/useCommand'

export default function Console() {

    const runCommand = useCommand()
    const [value, setValue] = useState('')
    const [command, setCommand] = useState('')

    useEffect(() => {
        if (command === '') return

        runCommand(command.split('').shift())
        setCommand(command.slice(1))
    }, [command, runCommand])

    const handleClick = () => {
        setValue(validateCommand(value))
        setCommand(value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={handleClick}>Run</button>
        </div>
    )
}
