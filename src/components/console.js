import React, {useState} from 'react'
import validateCommand from '../services/validateCommand'
import useCommand from '../hooks/useCommand'

export default function Console() {

    const runCommand = useCommand()
    const [cmd, setCmd] = useState('')

    const handleClick = () => {
        setCmd(validateCommand(cmd))
        runCommand(cmd)
    }

    return (
        <div>
            <input type="text" value={cmd} onChange={e => setCmd(e.target.value)}/>
            <button onClick={handleClick}>Run</button>
        </div>
    )
}
