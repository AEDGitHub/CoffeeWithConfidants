import * as SessionApiUtils from "../utils/session_api_utils"

// Confidant Actions
export const RECEIVE_CURRENT_CONFIDANT = "RECEIVE_CURRENT_CONFIDANT"
export const LOGOUT_CURRENT_CONFIDANT = "LOGOUT_CURRENT_CONFIDANT"

const receiveCurrentConfidant = (confidant) => {
    return {
        type: RECEIVE_CURRENT_CONFIDANT,
        confidant,
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
        return SessionApiUtils.postApiConfidant(formConfidant).then(
            (confidant) => {
                dispatch(receiveCurrentConfidant(confidant))
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
        return SessionApiUtils.postApiSession(formConfidant).then(
            (confidant) => {
                dispatch(receiveCurrentConfidant(confidant))
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

export const logout = () => {
    return (dispatch) => {
        return SessionApiUtils.deleteApiSession().then(() => {
            dispatch(logoutCurrentConfidant())
        })
    }
}

export const ditchSessionErrors = () => {
    return (dispatch) => {
        dispatch(clearSessionErrors())
    }
}
