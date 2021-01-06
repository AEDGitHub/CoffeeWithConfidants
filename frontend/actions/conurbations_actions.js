import { getAllApiConurbations } from '../utils/conurbations_api_utils'

// Actions
export const RECEIVE_CONURBATIONS = 'RECEIVE_CONURBATIONS'
export const CLEAR_CONURBATIONS = 'CLEAR_CONURBATIONS'

const receiveConurbations = ({ entities }, type) => {
	return {
		type,
		entities,
	}
}

export const clearConurbations = (type) => {
	return {
		type,
	}
}

// Thunk Action Creators
export const fetchAllApiConurbations = () => {
	return (dispatch) => {
		return getAllApiConurbations().then((payload) => {
			dispatch(receiveConurbations(payload, RECEIVE_CONURBATIONS))
		})
	}
}

export const ditchConurbations = () => {
	return (dispatch) => {
		dispatch(clearConurbations(CLEAR_CONURBATIONS))
	}
}
