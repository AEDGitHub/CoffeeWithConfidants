import {
    LOGOUT_CURRENT_CONFIDANT,
    RECEIVE_CURRENT_CONFIDANT,
} from "../actions/session_actions"

const sessionReducer = (
    oldState = {
        ccId: null,
        flash: [],
    },
    action
) => {
    Object.freeze(oldState)
    switch (action.type) {
        case LOGOUT_CURRENT_CONFIDANT:
            return _blankState
        case RECEIVE_CURRENT_CONFIDANT:
            return { ...oldState, ccId: action.confidant.id }
        default:
            return { ...oldState }
    }
}

export default sessionReducer
