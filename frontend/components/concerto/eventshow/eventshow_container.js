import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
    fetchFilteredApiConfabs,
    joinConfab,
    leaveConfab,
} from "../../../actions/confabs_actions"
import { convertDatetimeStringToObject } from "../../../utils/modification_utils"
import EventShow from "./eventshow"

const mSTP = (state, ownProps) => {
    return {
        confab: state.entities.confabs[ownProps.match.params.confabId],
        confidants: state.entities.confidants,
        conurbations: state.entities.conurbations,
        conflations: state.entities.conflations,
        ccId: state.session.ccId,
        loggedIn: Boolean(state.session.ccId),
        convertDatetimeStringToObject: convertDatetimeStringToObject,
    }
}

const mDTP = (dispatch) => {
    return {
        loadConfab: (confabId) => dispatch(fetchFilteredApiConfabs(confabId)),
        joinConfab: (confabId) => dispatch(joinConfab(confabId)),
        leaveConfab: (confabId, conflationId) =>
            dispatch(leaveConfab(confabId, conflationId)),
    }
}

export default connect(mSTP, mDTP)(EventShow)
