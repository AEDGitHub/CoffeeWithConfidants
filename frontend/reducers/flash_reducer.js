import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"
import {
	RECEIVE_POSTED_CONFAB,
	RECEIVE_JOINED_CONFAB,
	RECEIVE_LEFT_CONFAB,
} from "../actions/confabs_actions"

const flashReducer = (oldState = { message: null, status: null }, action) => {
	Object.freeze(oldState)
	switch (action.type) {
		// case RECEIVE_CURRENT_CONFIDANT:

		case RECEIVE_POSTED_CONFAB:
			return {
				message: "Confab created.",
				status: "success",
			}
		case RECEIVE_JOINED_CONFAB:
			return {
				message: "Confab joined.",
				status: "success",
			}
		case RECEIVE_LEFT_CONFAB:
			return {
				message: "Confab left.",
				status: "success",
			}
		default:
			return { ...oldState }
	}
}

export default flashReducer
