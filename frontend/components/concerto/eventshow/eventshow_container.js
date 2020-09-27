import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import EventShow from "./eventshow"

const mSTP = (state) => {
    return {}
}

const mDTP = (dispatch) => {
    return {}
}

export default connect(mSTP, mDTP)(EventShow)
