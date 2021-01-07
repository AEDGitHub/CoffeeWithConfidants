export const CLEAR_FLASH = 'CLEAR_FLASH'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

const clearFlash = (type) => {
	return { type }
}

export const receiveError = ({ flash = { message: null, status: null } }) => {
	return {
		type: RECEIVE_ERROR,
		flash,
	}
}

export const ditchFlash = () => {
	return (dispatch) => {
		dispatch(clearFlash(CLEAR_FLASH))
	}
}
