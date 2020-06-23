import {
    RECEIVE_CURRENT_CONFIDANT,
} from '../actions/session_actions'

const confidantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_CONFIDANT:
            return Object.assign({}, oldState, { [action.confidant.id]: confidant.user });
        default:
            return oldState;
    }
}

export default confidantsReducer;