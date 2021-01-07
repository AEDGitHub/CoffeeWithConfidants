import {
	patchApiConfidant,
	postApiConfidant,
	postApiSession,
	deleteApiConfidant,
	deleteApiSession,
} from '../utils/session_api_utils'
import { receiveError } from './flash_actions'

// Confidant Actions
export const RECEIVE_CURRENT_CONFIDANT = 'RECEIVE_CURRENT_CONFIDANT'
export const LOGOUT_CURRENT_CONFIDANT = 'LOGOUT_CURRENT_CONFIDANT'

const receiveConfidant = (
	{ entities, flash = { message: null, status: null } },
	type
) => {
	return {
		entities,
		flash,
		type,
	}
}

const logoutConfidant = (type) => {
	return {
		type,
	}
}

//Thunk Action Creators
export const signup = (confidant) => {
	return (dispatch) => {
		return postApiConfidant(confidant).then(
			(payload) => {
				dispatch(receiveConfidant(payload, RECEIVE_CURRENT_CONFIDANT))
			},
			(err) => {
				dispatch(receiveError(err.responseJSON))
			}
		)
	}
}

export const signin = (confidant) => {
	return (dispatch) => {
		return postApiSession(confidant).then(
			(payload) => {
				dispatch(receiveConfidant(payload, RECEIVE_CURRENT_CONFIDANT))
			},
			(err) => {
				dispatch(receiveError(err.responseJSON))
			}
		)
	}
}

export const logout = () => {
	return (dispatch) => {
		return deleteApiSession().then(() => {
			dispatch(logoutConfidant(LOGOUT_CURRENT_CONFIDANT))
		})
	}
}

export const deleteAccount = (confidantId) => {
	return (dispatch) => {
		return deleteApiConfidant(confidantId).then(() => {
			dispatch(logoutConfidant(LOGOUT_CURRENT_CONFIDANT))
		})
	}
}

export const updateAccount = (confidant) => {
	return (dispatch) => {
		return patchApiConfidant(confidant).then((payload) => {
			dispatch(receiveConfidant(payload, RECEIVE_CURRENT_CONFIDANT))
		})
	}
}
