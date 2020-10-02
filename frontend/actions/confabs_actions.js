import { getFilteredApiConfabs } from "../utils/confabs_api_utils"
import {
    deleteApiConflation,
    postApiConflation,
} from "../utils/conflations_api_utils"

// Actions
export const RECEIVE_ALL_CONFABS = "RECEIVE_ALL_CONFABS"
export const RECEIVE_ABANDONED_CONFAB = "RECEIVE_ABANDONED_CONFAB"
export const CLEAR_ALL_CONFABS = "CLEAR_ALL_CONFABS"

const receiveAllConfabs = ({
    confabs,
    confidants,
    conurbations,
    conflations,
}) => {
    return {
        type: RECEIVE_ALL_CONFABS,
        confabs,
        confidants,
        conurbations,
        conflations,
    }
}

const receiveAbandonedConfab = (
    { confabs, confidants, conurbations, conflations },
    deadConflationId
) => {
    return {
        type: RECEIVE_ABANDONED_CONFAB,
        confabs,
        confidants,
        conurbations,
        conflations,
        deadConflationId,
    }
}

const clearAllConfabs = () => {
    return {
        type: CLEAR_ALL_CONFABS,
    }
}

// Thunk Action Creators
export const fetchFilteredApiConfabs = (confabId = null) => {
    return (dispatch) => {
        return getFilteredApiConfabs((confabId = null)).then((payload) => {
            dispatch(receiveAllConfabs(payload))
        })
    }
}

export const joinConfab = (confabId) => {
    return (dispatch) => {
        return postApiConflation(confabId).then(
            (payload) => {
                dispatch(receiveAllConfabs(payload))
            },
            (err) => {
                console.log(err.responseJSON)
                // dispatch(receiveErrors(err.responseJSON))
            }
        )
    }
}

export const leaveConfab = (confabId, conflationId) => {
    return (dispatch) => {
        return deleteApiConflation(confabId, conflationId).then(
            (payload) => {
                dispatch(receiveAbandonedConfab(payload, conflationId))
            },
            (err) => {
                console.log(err.responseJSON)
            }
        )
    }
}

export const ditchConfabs = () => {
    return (dispatch) => {
        dispatch(clearAllConfabs())
    }
}
