import {
	getFilteredApiConfabs,
	postApiConfab,
} from "../utils/confabs_api_utils"
import {
	deleteApiConflation,
	postApiConflation,
} from "../utils/conflations_api_utils"

export const RECEIVE_ALL_CONFABS = "RECEIVE_ALL_CONFABS"
export const RECEIVE_POSTED_CONFAB = "RECEIVE_POSTED_CONFAB"
export const RECEIVE_JOINED_CONFAB = "RECEIVE_JOINED_CONFAB"
export const RECEIVE_LEFT_CONFAB = "RECEIVE_LEFT_CONFAB"
export const CLEAR_ALL_CONFABS = "CLEAR_ALL_CONFABS"

const receiveConfabs = ({ confabs, confidants, conurbations }, type) => {
	return {
		type,
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
			dispatch(receiveConfabs(payload, RECEIVE_ALL_CONFABS))
		})
	}
}

export const createConfab = (conurbationId, confab) => {
	return (dispatch) => {
		return postApiConfab(conurbationId, confab).then(
			(payload) => {
				dispatch(receiveConfabs(payload, RECEIVE_POSTED_CONFAB))
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
				dispatch(receiveConfabs(payload, RECEIVE_JOINED_CONFAB))
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
				dispatch(receiveConfabs(payload, RECEIVE_LEFT_CONFAB))
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
