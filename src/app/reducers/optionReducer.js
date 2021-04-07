const {createSlice} = require('@reduxjs/toolkit')
const {defaultRoverDirection} = require('../../config')
const {defaultRoverPosition} = require('../../config')


const initialState = {
    position: defaultRoverPosition,
    direction: defaultRoverDirection,
}

const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        setPos(state, action) {
            state.position = action.payload
        },
        turnLeft(state) {
            state.direction--
        },
        turnRight(state) {
            state.direction++
        }
    }
})

export const {setPos, turnLeft, turnRight} = optionSlice.actions


export default optionSlice.reducer
