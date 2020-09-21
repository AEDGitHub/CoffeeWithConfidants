import React from "react"
import {
    areConfabsLoaded,
    selectAllConfabs,
    selectParticularConfab,
} from "../../../reducers/selectors"
import {
    fetchFilteredApiConfabs,
    ditchConfabs,
} from "../../../actions/confabs_actions"
import { connect } from "react-redux"
import CoffeeSchedule from "./coffeeschedule"

const mSTP = (state) => {
    return {
        confabs: selectAllConfabs(state),
        confabsAreLoaded: areConfabsLoaded(state),
        testState: "This is only a test.",
    }
}

const mDTP = (dispatch) => {
    return {
        loadConfabs: () => dispatch(fetchFilteredApiConfabs()),
        unloadConfabs: () => dispatch(ditchConfabs()),
    }
}

export default connect(mSTP, mDTP)(CoffeeSchedule)
