import {
    RECEIVE_ALL_CONURBATIONS,
    CLEAR_ALL_CONURBATIONS,
} from "../actions/conurbations_actions"
import { RECEIVE_ALL_CONFABS } from "../actions/confabs_actions"

const conurbationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_CONURBATIONS:
            return { ...oldState, ...action.conurbations }
        case RECEIVE_ALL_CONFABS:
            return { ...oldState, ...action.conurbations }
        case CLEAR_ALL_CONURBATIONS:
            return {}
        default:
            return { ...oldState }
    }
}

export default conurbationsReducer
