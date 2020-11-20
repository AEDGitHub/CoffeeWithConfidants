import { getAllApiConurbations } from "../utils/conurbations_api_utils"

// Actions
export const RECEIVE_ALL_CONURBATIONS = "RECEIVE_ALL_CONURBATIONS"
export const CLEAR_ALL_CONURBATIONS = "CLEAR_ALL_CONURBATIONS"

const receiveAllConurbations = ({ conurbations }) => {
	return {
		type: RECEIVE_ALL_CONURBATIONS,
		conurbations,
	}
}

export const clearAllConurbations = () => {
	return {
		type: CLEAR_ALL_CONURBATIONS,
	}
}

// Thunk Action Creators
export const fetchAllApiConurbations = () => {
	return (dispatch) => {
		return getAllApiConurbations().then((payload) => {
			dispatch(receiveAllConurbations(payload))
		})
	}
}

export const ditchConurbations = () => {
	return (dispatch) => {
		dispatch(clearAllConurbations())
	}
}
