import {
    postApiSession,
    deleteApiSession,
    postApiConfidant,
} from '../utils/session_api_utils';

export const LOGOUT_CURRENT_CONFIDANT = 'LOGOUT_CURRENT_CONFIDANT'
export const RECEIVE_CURRENT_CONFIDANT = 'RECEIVE_CURRENT_CONFIDANT'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const logoutCurrentConfidant = () => ({
    type: LOGOUT_CURRENT_CONFIDANT
})

const receiveCurrentConfidant = (confidant) => ({
    type: RECEIVE_CURRENT_CONFIDANT,
    confidant
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = formConfidant => dispatch => postApiConfidant(formConfidant)
    .then(confidant => dispatch(receiveCurrentConfidant(confidant)));

export const login = formConfidant => dispatch => postApiSession(formConfidant)
    .then(confidant => dispatch(receiveCurrentConfidant(confidant)));

export const logout = () => dispatch => deleteApiSession()
    .then(() => dispatch(logoutCurrentConfidant()));