export const CLEAR_FLASH = "CLEAR_FLASH"

const clearFlash = (type) => {
	return { type }
}

export const ditchFlash = () => {
	return (dispatch) => {
		dispatch(clearFlash(CLEAR_FLASH))
	}
}
