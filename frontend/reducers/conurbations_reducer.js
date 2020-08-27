import {
    RECEIVE_ALL_CONURBATIONS,
    CLEAR_ALL_CONURBATIONS,
} from "../actions/conurbations_actions"

const conurbationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_CONURBATIONS:
            return { ...oldState, ...action.conurbations }
        case CLEAR_ALL_CONURBATIONS:
            return {}
        default:
            return { ...oldState }
    }
}

export default conurbationsReducer
