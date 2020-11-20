import { RECEIVE_CONFABS, CLEAR_CONFABS } from "../actions/confabs_actions"
import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"

const confabsReducer = (oldState = {}, action) => {
	Object.freeze(oldState)
	switch (action.type) {
		case CLEAR_CONFABS:
			return {}
		case RECEIVE_CONFABS:
		case RECEIVE_CURRENT_CONFIDANT:
			return { ...oldState, ...action.entities.confabs }
		default:
			return { ...oldState }
	}
}

export default confabsReducer
