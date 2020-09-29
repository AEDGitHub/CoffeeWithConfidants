import { getFilteredApiConfabs } from "../utils/confabs_api_utils"
import { postApiConflation } from "../utils/conflations_api_utils"

// Actions
export const RECEIVE_ALL_CONFABS = "RECEIVE_ALL_CONFABS"
export const RECEIVE_CURRENT_CONFAB = "RECEIVE_CURRENT_CONFAB"
export const CLEAR_ALL_CONFABS = "CLEAR_ALL_CONFABS"

const receiveAllConfabs = ({ confabs, confidants, conurbations }) => {
    return {
        type: RECEIVE_ALL_CONFABS,
        confabs,
        confidants,
        conurbations,
    }
}

const receiveCurrentConfab = ({ confabs }) => {
    return {
        type: RECEIVE_CURRENT_CONFAB,
        confabs,
    }
}

const clearAllConfabs = () => {
    return {
        type: CLEAR_ALL_CONFABS,
    }
}

// Thunk Action Creators
export const fetchFilteredApiConfabs = () => {
    return (dispatch) => {
        return getFilteredApiConfabs().then((payload) => {
            dispatch(receiveAllConfabs(payload))
        })
    }
}

export const joinConfab = (confabId) => {
    return (dispatch) => {
        return postApiConflation(confabId).then(
            (payload) => {
                dispatch(receiveCurrentConfab(payload))
            },
            (err) => {
                console.log(err.responseJSON)
                // dispatch(receiveErrors(err.responseJSON))
            }
        )
    }
}

export const ditchConfabs = () => {
    return (dispatch) => {
        dispatch(clearAllConfabs())
    }
}
