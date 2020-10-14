import {
    patchApiConfidant,
    postApiConfidant,
    postApiSession,
    deleteApiConfidant,
    deleteApiSession,
} from "../utils/session_api_utils"

// Confidant Actions
export const RECEIVE_CURRENT_CONFIDANT = "RECEIVE_CURRENT_CONFIDANT"
export const LOGOUT_CURRENT_CONFIDANT = "LOGOUT_CURRENT_CONFIDANT"

const receiveCurrentConfidant = ({ confabs, confidants, conurbations }) => {
    return {
        type: RECEIVE_CURRENT_CONFIDANT,
        confabs,
        confidants,
        conurbations,
    }
}

const logoutCurrentConfidant = () => {
    return {
        type: LOGOUT_CURRENT_CONFIDANT,
    }
}

// Session Actions
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors,
    }
}

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS,
    }
}

//Thunk Action Creators
export const signup = (formConfidant) => {
    return (dispatch) => {
        return postApiConfidant(formConfidant).then(
            (payload) => {
                dispatch(receiveCurrentConfidant(payload))
            },
            (err) => {
                dispatch(receiveErrors(err.responseJSON))
            }
        )
        // .fail((errors) => {
        //     dispatch(receiveErrors(errors))
        // })
    }
}

export const signin = (formConfidant) => {
    return (dispatch) => {
        return postApiSession(formConfidant).then(
            (payload) => {
                dispatch(receiveCurrentConfidant(payload))
            },
            (err) => {
                dispatch(receiveErrors(err.responseJSON))
            }
        )
        // .fail((errors) => {
        //     dispatch(receiveErrors(err.responseJSON))
        // })
    }
}

export const logout = () => {
    return (dispatch) => {
        return deleteApiSession().then(() => {
            dispatch(logoutCurrentConfidant())
        })
    }
}

export const deleteAccount = (confidantId) => {
    return (dispatch) => {
        return deleteApiConfidant(confidantId).then(() => {
            dispatch(logoutCurrentConfidant())
        })
    }
}

export const updateAccount = (confidant) => {
    return (dispatch) => {
        return patchApiConfidant(confidant).then((payload) => {
            dispatch(receiveCurrentConfidant(payload))
        })
    }
}

export const ditchSessionErrors = () => {
    return (dispatch) => {
        dispatch(clearSessionErrors())
    }
}
