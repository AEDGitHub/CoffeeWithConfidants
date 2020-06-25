import {
    LOGOUT_CURRENT_CONFIDANT,
    RECEIVE_CURRENT_CONFIDANT,
} from '../actions/session_actions'

const _blankState = {
    ccId: null,
    flash: [],
};

const sessionReducer = (oldState = _blankState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_CONFIDANT:
            return Object.assign({}, { ccId: action.confidant.id });
        case LOGOUT_CURRENT_CONFIDANT:
            return _blankState;
        default:
            return oldState;
    };
};

export default sessionReducer;