import {
    RECEIVE_CURRENT_CONFIDANT,
    RECEIVE_SESSION_ERRORS,
} from "../actions/session_actions"

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_CONFIDANT:
            return { ...oldState, errors: [] }
        // return Object.assign({}, oldState, { errors: [] });
        case RECEIVE_SESSION_ERRORS:
            return { ...oldState, errors: action.errors }
        // return Object.assign({}, oldState, { errors: action.errors });
        default:
            return oldState
    }
}

export default sessionErrorsReducer
