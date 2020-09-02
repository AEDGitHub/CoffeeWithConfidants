import {
    LOGOUT_CURRENT_CONFIDANT,
    RECEIVE_CURRENT_CONFIDANT,
    RECEIVE_SESSION_ERRORS,
} from "../actions/session_actions"

const _blankState = {
    ccId: null,
    flash: [],
}

const sessionReducer = (oldState = _blankState, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case LOGOUT_CURRENT_CONFIDANT:
            return _blankState
        case RECEIVE_CURRENT_CONFIDANT:
            return { ...oldState, ccId: action.confidant.id }
        case RECEIVE_SESSION_ERRORS:
            const flashCopy = [] //I don't like this method of doing things at ALL
            flashCopy.push(action.errors.responseText)
            return { ...oldState, flash: flashCopy }
        default:
            return { ...oldState }
    }
}

export default sessionReducer
