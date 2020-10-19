import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"
import { RECEIVE_ALL_CONFABS } from "../actions/confabs_actions"

const confidantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_CONFIDANT:
        case RECEIVE_ALL_CONFABS:
            return { ...oldState, ...action.confidants }
        default:
            return { ...oldState }
    }
}

export default confidantsReducer
