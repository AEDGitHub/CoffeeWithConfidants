import React from "react"
import { connect } from "react-redux"
import Flash from "./flash"

const mSTP = ({ flash: { message, status } }) => {
	return {
		msg: message,
		status: status,
	}
}

export default connect(mSTP)(Flash)
