import {
	RECEIVE_CONURBATIONS,
	CLEAR_CONURBATIONS,
} from "../actions/conurbations_actions"
import { RECEIVE_CONFABS } from "../actions/confabs_actions"
import { RECEIVE_CURRENT_CONFIDANT } from "../actions/session_actions"

const conurbationsReducer = (oldState = {}, action) => {
	Object.freeze(oldState)
	switch (action.type) {
		case RECEIVE_CONFABS:
		case RECEIVE_CONURBATIONS:
		case RECEIVE_CURRENT_CONFIDANT:
			return { ...oldState, ...action.entities.conurbations }
		case CLEAR_CONURBATIONS:
			return {}
		default:
			return { ...oldState }
	}
}

export default conurbationsReducer
