import {
    RECEIVE_ALL_CONURBATIONS,
} from '../actions/conurbations_actions'

const conurbationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_CONURBATIONS:
            return Object.assign({}, oldState, action.conurbations);
        default:
            return oldState;
    }
}

export default conurbationsReducer;