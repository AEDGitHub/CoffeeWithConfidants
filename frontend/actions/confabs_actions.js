import {
    getFilteredApiConfabs,
    postApiConfab,
} from "../utils/confabs_api_utils"
import {
    deleteApiConflation,
    postApiConflation,
} from "../utils/conflations_api_utils"

export const RECEIVE_ALL_CONFABS = "RECEIVE_ALL_CONFABS"
export const CLEAR_ALL_CONFABS = "CLEAR_ALL_CONFABS"

const receiveAllConfabs = ({ confabs, confidants, conurbations }) => {
    return {
        type: RECEIVE_ALL_CONFABS,
        confabs,
        confidants,
        conurbations,
    }
}

const clearAllConfabs = () => {
    return {
        type: CLEAR_ALL_CONFABS,
    }
}

export const fetchFilteredApiConfabs = (confabId = null) => {
    return (dispatch) => {
        return getFilteredApiConfabs(confabId).then((payload) => {
            dispatch(receiveAllConfabs(payload))
        })
    }
}

export const createConfab = (conurbationId, confab) => {
    return (dispatch) => {
        return postApiConfab(conurbationId, confab).then(
            (payload) => {
                dispatch(receiveAllConfabs(payload))
            },
            (err) => {
                console.log(err.responseJSON)
            }
        )
    }
}

export const joinConfab = (confabId) => {
    return (dispatch) => {
        return postApiConflation(confabId).then(
            (payload) => {
                dispatch(receiveAllConfabs(payload))
            },
            (err) => {
                // dispatch(receiveErrors(err.responseJSON))
            }
        )
    }
}

export const leaveConfab = (confabId, confidantId) => {
    return (dispatch) => {
        return deleteApiConflation(confabId, confidantId).then(
            (payload) => {
                dispatch(receiveAllConfabs(payload))
            },
            (err) => {}
        )
    }
}

export const ditchConfabs = () => {
    return (dispatch) => {
        dispatch(clearAllConfabs())
    }
}
