import {
	RECEIVE_CURRENT_CONFIDANT,
	RECEIVE_SESSION_ERRORS,
	CLEAR_SESSION_ERRORS,
} from "../actions/session_actions"

const flashReducer = (oldState = { message: null, status: null }, action) => {
	Object.freeze(oldState)
	switch (action.type) {
		case RECEIVE_CURRENT_CONFIDANT:
			return { message: "Successfully logged in.", status: "success" }
		default:
			return { ...oldState }
	}
}

export default flashReducer
