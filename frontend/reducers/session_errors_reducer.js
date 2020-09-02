import {
    RECEIVE_CURRENT_CONFIDANT,
    RECEIVE_SESSION_ERRORS,
} from "../actions/session_actions"

const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_CONFIDANT:
            return {}
        case RECEIVE_SESSION_ERRORS:
            // const errorsArray = [...oldState]
            // errorsArray.push(action.errors.responseText)
            // return errorsArray
            return { ...oldState, ...action.errors }
        default:
            return { ...oldState }
    }
}

export default sessionErrorsReducer
