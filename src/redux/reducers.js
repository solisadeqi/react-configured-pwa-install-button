// just basic sample 
import { combineReducers } from "redux";


const navbar = ( state = false, actions ) =>{
    switch (actions.type) {
        case true:
            return !state
        default:
            return state
    }
}

const rootReducer= combineReducers({
    navbar,
})

export default rootReducer