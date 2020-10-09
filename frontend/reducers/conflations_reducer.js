import {
    RECEIVE_ALL_CONFABS,
    RECEIVE_ABANDONED_CONFAB,
} from "../actions/confabs_actions"

const conflationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_CONFABS:
        case RECEIVE_ABANDONED_CONFAB:
            return { ...oldState, ...action.conflations }
        // case RECEIVE_ABANDONED_CONFAB:
        //     const nextState = { ...oldState }
        //     delete nextState[action.deadConflationId]
        //     return nextState
        default:
            return { ...oldState }
    }
}

export default conflationsReducer
