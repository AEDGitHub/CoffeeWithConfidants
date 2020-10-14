import {
    RECEIVE_ALL_CONURBATIONS,
    CLEAR_ALL_CONURBATIONS,
} from "../actions/conurbations_actions"
import { RECEIVE_ALL_CONFABS } from "../actions/confabs_actions"
import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"

const conurbationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_CONFABS:
        case RECEIVE_ALL_CONURBATIONS:
        case RECEIVE_CURRENT_CONFIDANT:
            return { ...oldState, ...action.conurbations }
        case CLEAR_ALL_CONURBATIONS:
            return {}
        default:
            return { ...oldState }
    }
}

export default conurbationsReducer
