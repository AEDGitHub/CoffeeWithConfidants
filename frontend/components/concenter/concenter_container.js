import React from "react"

import { connect } from "react-redux"
import Concenter from "./concenter"

const mSTP = (state) => {
	return {
		sessionErrors: state.session.errors,
	}
}

const mDTP = (dispatch) => {
	return {}
}

export default connect(mSTP, mDTP)(Concenter)
