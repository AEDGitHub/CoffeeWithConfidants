import {
    CLEAR_ALL_CONFABS,
    RECEIVE_ALL_CONFABS,
    RECEIVE_CURRENT_CONFAB,
} from "../actions/confabs_actions"

const confabsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case CLEAR_ALL_CONFABS:
            return {}
        case RECEIVE_ALL_CONFABS:
        case RECEIVE_CURRENT_CONFAB:
            return { ...oldState, ...action.confabs }
        default:
            return { ...oldState }
    }
}

export default confabsReducer
