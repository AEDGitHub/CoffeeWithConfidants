import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_CONFIDANT,
} from '../actions/session_actions'

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, oldState, { errors: action.errors });
        case RECEIVE_CURRENT_CONFIDANT:
            return Object.assign({}, oldState, { errors: [] });
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;