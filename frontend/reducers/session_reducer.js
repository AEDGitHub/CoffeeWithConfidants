import { RECEIVE_CURRENT_CONFIDANT } from '../actions/session_actions'

const sessionReducer = (
	oldState = {
		ccId: null,
	},
	action
) => {
	Object.freeze(oldState)
	switch (action.type) {
		case RECEIVE_CURRENT_CONFIDANT:
			return {
				...oldState,
				ccId: parseInt(Object.keys(action.entities.confidants)[0]),
			}
		default:
			return { ...oldState }
	}
}

export default sessionReducer
