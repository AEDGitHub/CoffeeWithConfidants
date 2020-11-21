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

// Session Actions
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
// export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

const receiveErrors = (errors) => {
	return {
		type: RECEIVE_SESSION_ERRORS,
		errors,
	}
}

// export const clearSessionErrors = () => {
// 	return {
// 		type: CLEAR_SESSION_ERRORS,
// 	}
// }

//Thunk Action Creators
export const signup = (confidant) => {
	return (dispatch) => {
		return postApiConfidant(confidant).then(
			(payload) => {
				dispatch(receiveConfidant(payload, RECEIVE_CURRENT_CONFIDANT))
			},
			(err) => {
				dispatch(receiveErrors(err.responseJSON))
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
				dispatch(receiveErrors(err.responseJSON))
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

// export const ditchSessionErrors = () => {
// 	return (dispatch) => {
// 		dispatch(clearSessionErrors())
// 	}
// }
