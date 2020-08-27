import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"

const confidantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_CONFIDANT:
            return { ...oldState, [action.confidant.id]: action.confidant }
        // return Object.assign({}, oldState, {
        //     [action.confidant.id]: action.confidant,
        // });
        default:
            return oldState
    }
}

export default confidantsReducer
