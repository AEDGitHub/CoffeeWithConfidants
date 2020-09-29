import {
    CLEAR_ALL_CONFABS,
    RECEIVE_ALL_CONFABS,
} from "../actions/confabs_actions"
import { RECEIVE_CURRENT_CONFLATION } from "../actions/conflations_actions"

const confabsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case CLEAR_ALL_CONFABS:
            return {}
        case RECEIVE_CURRENT_CONFLATION:
        case RECEIVE_ALL_CONFABS:
            return { ...oldState, ...action.confabs }
        default:
            return { ...oldState }
    }
}

export default confabsReducer
