import { combineReducers } from "redux"
import confidants from "./confidants_reducer"
import conurbations from "./conurbations_reducer"
import confabs from "./confabs_reducer"

const entitiesReducer = combineReducers({
	confidants,
	conurbations,
	confabs,
})

export default entitiesReducer
