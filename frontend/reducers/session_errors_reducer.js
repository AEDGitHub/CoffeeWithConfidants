import {
    RECEIVE_CURRENT_CONFIDANT,
    RECEIVE_SESSION_ERRORS,
    CLEAR_SESSION_ERRORS,
} from "../actions/session_actions"

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_CONFIDANT:
            return []
        case CLEAR_SESSION_ERRORS:
            return []
        case RECEIVE_SESSION_ERRORS:
            const errorsArray = [...oldState]
            action.errors.forEach((error) => {
                errorsArray.push(error)
            })
            return errorsArray
        default:
            return oldState
    }
}

export default sessionErrorsReducer
