import appReducer from "./app_reducer"

import { LOGOUT_CURRENT_CONFIDANT } from "../actions/session_actions"

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_CURRENT_CONFIDANT) {
		state = {
			entities: { confidants: {}, conurbations: {}, confabs: {} },
			flash: { message: "Signed out.", status: "success" },
			session: { ccId: null },
		}
	}

	return appReducer(state, action)
}

export default rootReducer
