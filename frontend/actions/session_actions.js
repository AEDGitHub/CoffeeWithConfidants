import {
    postApiConfidant,
    postApiSession,
    deleteApiSession,
} from '../utils/session_api_utils';

// Confidant Actions
export const RECEIVE_CURRENT_CONFIDANT = 'RECEIVE_CURRENT_CONFIDANT'
export const LOGOUT_CURRENT_CONFIDANT = 'LOGOUT_CURRENT_CONFIDANT'

const receiveCurrentConfidant = confidant => {
    return {
        type: RECEIVE_CURRENT_CONFIDANT,
        confidant
    }
}

const logoutCurrentConfidant = () => {
    return {
        type: LOGOUT_CURRENT_CONFIDANT
    }
}

// Session Actions
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

//Thunk Action Creators
export const signup = formConfidant => dispatch => postApiConfidant(formConfidant)
    .then(confidant => dispatch(receiveCurrentConfidant(confidant)));

export const signin = formConfidant => dispatch => postApiSession(formConfidant)
    .then(confidant => dispatch(receiveCurrentConfidant(confidant)));

export const logout = () => dispatch => deleteApiSession()
    .then(() => dispatch(logoutCurrentConfidant()));