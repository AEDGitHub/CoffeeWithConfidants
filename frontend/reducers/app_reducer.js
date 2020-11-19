import { combineReducers } from "redux"
import entities from "./entities_reducer"
import flash from "./flash_reducer"
import session from "./session_reducer"

const appReducer = combineReducers({
	entities,
	flash,
	session,
})

export default appReducer
