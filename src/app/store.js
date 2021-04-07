import {configureStore} from '@reduxjs/toolkit'
import optionReducer from './reducers/optionReducer'

export default configureStore({
    reducer: {
        option: optionReducer
    }
})
