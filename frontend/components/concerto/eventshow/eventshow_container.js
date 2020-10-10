import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
    fetchFilteredApiConfabs,
    joinConfab,
    leaveConfab,
} from "../../../actions/confabs_actions"
import {
    convertDatetimeStringToObject,
    determineWhetherConfidantIsAttending,
    restOfConurbationName,
    shorterConurbationName,
} from "../../../utils/modification_utils"
import EventShow from "./eventshow"

const mSTP = (state, ownProps) => {
    return {
        ccId: state.session.ccId,
        confab: state.entities.confabs[ownProps.match.params.confabId],
        confidants: state.entities.confidants,
        conurbations: state.entities.conurbations,
        conflations: state.entities.conflations,
        loggedIn: Boolean(state.session.ccId),
        convertDatetimeStringToObject: convertDatetimeStringToObject,
        determineWhetherConfidantIsAttending: determineWhetherConfidantIsAttending,
        restOfConurbationName: restOfConurbationName,
        shorterConurbationName: shorterConurbationName,
    }
}

const mDTP = (dispatch) => {
    return {
        joinConfab: (confabId) => dispatch(joinConfab(confabId)),
        leaveConfab: (confabId, conflationId) =>
            dispatch(leaveConfab(confabId, conflationId)),
        loadConfab: (confabId) => dispatch(fetchFilteredApiConfabs(confabId)),
    }
}

export default connect(mSTP, mDTP)(EventShow)
