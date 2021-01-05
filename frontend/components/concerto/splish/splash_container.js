import { connect } from "react-redux"
import Splash from "./splash"

import { ditchFlash } from "../../../actions/flash_actions"

const mSTP = () => {
	return {}
}

const mDTP = (dispatch) => {
	return {
		unloadFlash: () => dispatch(ditchFlash()),
	}
}

export default connect(mSTP, mDTP)(Splash)
