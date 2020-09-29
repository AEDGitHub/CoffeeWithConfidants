import { postApiConflation } from "../utils/conflations_api_utils"

export const CLEAR_ALL_CONFLATIONS = "CLEAR_ALL_CONFLATIONS"
export const RECEIVE_CURRENT_CONFLATION = "RECEIVE_CURRENT_CONFLATION"

// Actions

const receiveCurrentConflation = ({ confabs }) => {
    return {
        type: RECEIVE_CURRENT_CONFLATION,
        confabs,
    }
}

const clearAllConflations = () => {
    return {
        type: CLEAR_ALL_CONFLATIONS,
    }
}

// Thunk Action Creators

export const joinConfab = (confabId) => {
    return (dispatch) => {
        return postApiConflation(confabId).then(
            (payload) => {
                dispatch(receiveCurrentConflation(payload))
            },
            (err) => {
                console.log(err.responseJSON)
                // dispatch(receiveErrors(err.responseJSON))
            }
        )
    }
}

export const ditchConflations = () => {
    return (dispatch) => {
        dispatch(clearAllConflations())
    }
}
