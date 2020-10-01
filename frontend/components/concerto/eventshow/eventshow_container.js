import React from "react"
import { Link } from "react-router-dom"
import { areConfabsLoaded } from "../../../reducers/selectors"
import { connect } from "react-redux"
import {
    fetchFilteredApiConfabs,
    joinConfab,
    leaveConfab,
} from "../../../actions/confabs_actions"
import EventShow from "./eventshow"

const mSTP = (state) => {
    return {
        confabsAreLoaded: areConfabsLoaded(state), //todo turn this singular, regarding only the targeted confab
        confidants: state.entities.confidants,
        conurbations: state.entities.conurbations,
        confabs: state.entities.confabs,
        conflations: state.entities.conflations,
        ccId: state.session.ccId,
        loggedIn: Boolean(state.session.ccId),
    }
}

const mDTP = (dispatch) => {
    return {
        loadConfabs: () => dispatch(fetchFilteredApiConfabs()), //todo turn this singular, get only required confab if not present
        joinConfab: (confabId) => dispatch(joinConfab(confabId)),
        leaveConfab: (confabId, conflationId) =>
            dispatch(leaveConfab(confabId, conflationId)),
    }
}

export default connect(mSTP, mDTP)(EventShow)
