import { CLEAR_ALL_CONFLATIONS } from "../actions/conflations_actions"
import { RECEIVE_ALL_CONFABS } from "../actions/confabs_actions"

const conflationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_CONFABS:
            return { ...oldState, ...action.conflations }
        case CLEAR_ALL_CONFLATIONS:
            return {}
        default:
            return { ...oldState }
    }
}

export default conflationsReducer
