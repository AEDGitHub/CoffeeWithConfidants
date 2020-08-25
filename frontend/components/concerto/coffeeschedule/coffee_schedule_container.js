import React from "react"
import {
    areConfabsLoaded,
    getAllConfabs,
    getParticularConfab,
} from "../../../reducers/selectors"
import { getAllApiConfabs } from "../../../actions/confabs_actions"
import { connect } from "react-redux"
import CoffeeSchedule from "./coffeeschedule"

const mSTP = (state) => {
    return {
        confabs: getAllConfabs(state),
        confabsAreLoaded: areConfabsLoaded(state),
        testState: "This is only a test.",
    }
}

const mDTP = (dispatch) => {
    return {
        loadConfabs: () => dispatch(getAllApiConfabs()),
    }
}

export default connect(mSTP, mDTP)(CoffeeSchedule)
