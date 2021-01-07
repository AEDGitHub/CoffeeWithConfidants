import {
	getFilteredApiConfabs,
	postApiConfab,
} from '../utils/confabs_api_utils'
import {
	deleteApiConflation,
	postApiConflation,
} from '../utils/conflations_api_utils'
import { receiveError } from './flash_actions'

export const RECEIVE_CONFABS = 'RECEIVE_CONFABS'
export const RECEIVE_CONFAB_ERRORS = 'RECEIVE_CONFAB_ERRORS'
export const CLEAR_CONFABS = 'CLEAR_CONFABS'

const receiveConfabs = (
	{ entities, flash = { message: null, status: null } },
	type
) => {
	return {
		type,
		entities,
		flash,
	}
}

const clearConfabs = (type) => {
	return {
		type,
	}
}

export const fetchFilteredApiConfabs = (confabId = null) => {
	return (dispatch) => {
		return getFilteredApiConfabs(confabId).then((payload) => {
			dispatch(receiveConfabs(payload, RECEIVE_CONFABS))
		})
	}
}

export const createConfab = (conurbationId, confab) => {
	return (dispatch) => {
		return postApiConfab(conurbationId, confab).then(
			(payload) => {
				dispatch(receiveConfabs(payload, RECEIVE_CONFABS))
			},
			(err) => {
				dispatch(receiveError(err.responseJSON))
			}
		)
	}
}

export const joinConfab = (confabId) => {
	return (dispatch) => {
		return postApiConflation(confabId).then(
			(payload) => {
				dispatch(receiveConfabs(payload, RECEIVE_CONFABS))
			},
			(err) => {
				dispatch(receiveError(err.responseJSON))
			}
		)
	}
}

export const leaveConfab = (confabId, confidantId) => {
	return (dispatch) => {
		return deleteApiConflation(confabId, confidantId).then(
			(payload) => {
				dispatch(receiveConfabs(payload, RECEIVE_CONFABS))
			},
			(err) => {
				dispatch(receiveError(err.responseJSON))
			}
		)
	}
}

export const ditchConfabs = () => {
	return (dispatch) => {
		dispatch(clearConfabs(CLEAR_CONFABS))
	}
}
