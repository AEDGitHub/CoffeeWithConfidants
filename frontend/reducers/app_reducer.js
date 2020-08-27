import { combineReducers } from "redux"
import entities from "./entities_reducer"
import errors from "./errors_reducer"
import session from "./session_reducer"

const appReducer = combineReducers({
    entities,
    errors,
    session,
})

export default appReducer
