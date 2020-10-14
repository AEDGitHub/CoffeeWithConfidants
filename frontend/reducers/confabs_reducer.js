import {
    CLEAR_ALL_CONFABS,
    RECEIVE_ALL_CONFABS,
} from "../actions/confabs_actions"
import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"

const confabsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case CLEAR_ALL_CONFABS:
            return {}
        case RECEIVE_ALL_CONFABS:
        case RECEIVE_CURRENT_CONFIDANT:
            return { ...oldState, ...action.confabs }
        default:
            return { ...oldState }
    }
}

export default confabsReducer
