import {
    RECEIVE_ALL_CONFABS,
    CLEAR_ALL_CONFABS,
} from "../actions/confabs_actions"

const confabsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_CONFABS:
            // return { ...oldState, confabs: action.confabs } // <- I want this one to work
            // return Object.assign({}, oldState, { confabs: action.confabs })
            return Object.assign({}, oldState, action.confabs) // <- this one works
        case CLEAR_ALL_CONFABS:
            return {}
        default:
            return oldState
    }
}

export default confabsReducer
