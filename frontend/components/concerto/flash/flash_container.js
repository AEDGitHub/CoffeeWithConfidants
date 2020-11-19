import React from "react"
import { connect } from "react-redux"
import Flash from "./flash"

const mSTP = ({ errors: { session }, session: { flash } }) => {
    return {
        errors: session.errors,
        flash: flash,
        testMsg: "Message Test Text.",
    }
}

export default connect(mSTP)(Flash)
