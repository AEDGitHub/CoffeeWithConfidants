import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"
import { RECEIVE_CONFABS } from "../actions/confabs_actions"

const flashReducer = (oldState = { message: null, status: null }, action) => {
	Object.freeze(oldState)
	switch (action.type) {
		case RECEIVE_CURRENT_CONFIDANT:
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
