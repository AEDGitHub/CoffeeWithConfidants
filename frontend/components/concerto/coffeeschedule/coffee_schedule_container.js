import React from "react"
import CoffeeSchedule from "./coffeeschedule"
import { connect } from "react-redux"

const mSTP = (state) => {
    return {
        testState: "This is only a test.",
    }
}

const mDTP = (dispatch) => {
    return {}
}

export default connect(mSTP, mDTP)(CoffeeSchedule)
