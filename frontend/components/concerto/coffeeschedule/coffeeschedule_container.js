//todo: remember to have a ditchConfidants method that does not drop the current user from GS

import React from "react"
import {
    areConfabsLoaded,
    areConurbationsLoaded,
    selectAllConfabs,
    selectParticularConfab,
} from "../../../reducers/selectors"
import {
    fetchFilteredApiConfabs,
    ditchConfabs,
} from "../../../actions/confabs_actions"
import { ditchConurbations } from "../../../actions/conurbations_actions"

import { connect } from "react-redux"
import CoffeeSchedule from "./coffeeschedule"

const mSTP = (state) => {
    return {
        confabs: selectAllConfabs(state),
        confabsAreLoaded: areConfabsLoaded(state),
        conurbationsAreLoaded: areConurbationsLoaded(state),
        testState: "This is only a test.",
    }
}

const mDTP = (dispatch) => {
    return {
        loadConfabs: () => dispatch(fetchFilteredApiConfabs()),
        unloadConfabs: () => dispatch(ditchConfabs()),
        unloadConurbations: () => dispatch(ditchConurbations()),
    }
}

export default connect(mSTP, mDTP)(CoffeeSchedule)
