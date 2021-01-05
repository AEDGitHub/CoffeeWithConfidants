import { CLEAR_FLASH } from "../actions/flash_actions"
import {
	RECEIVE_CURRENT_CONFIDANT,
	RECEIVE_SESSION_ERRORS,
} from "../actions/session_actions"
import { RECEIVE_CONFABS } from "../actions/confabs_actions"

const flashReducer = (oldState = { message: null, status: null }, action) => {
	Object.freeze(oldState)
	switch (action.type) {
		case CLEAR_FLASH:
			return { message: null, status: null }
		case RECEIVE_CURRENT_CONFIDANT:
		case RECEIVE_SESSION_ERRORS:
		case RECEIVE_CONFABS:
			return {
				message: action.flash.message,
				status: action.flash.status,
			}
		default:
			return { ...oldState }
	}
}

export default flashReducer
