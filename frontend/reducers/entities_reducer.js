import { combineReducers } from "redux"
import confidantsReducer from "./confidants_reducer"
import conurbationsReducer from "./conurbations_reducer"
import confabsReducer from "./confabs_reducer"

const entitiesReducer = combineReducers({
    confidants: confidantsReducer,
    conurbations: conurbationsReducer,
    confabs: confabsReducer,
})

export default entitiesReducer
