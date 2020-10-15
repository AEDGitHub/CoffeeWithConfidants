//todo: remember to have a ditchConfidants method that does not drop the current user from GS

import React from "react"
import {
    selectAllConfabs,
    selectAllConurbations,
} from "../../../reducers/selectors"
import {
    fetchFilteredApiConfabs,
    joinConfab,
    leaveConfab,
} from "../../../actions/confabs_actions"
import {
    convertDatetimeStringToObject,
    determineWhetherConfidantIsAttending,
    filterConfabsByConfabLocationId,
    shorterConurbationName,
} from "../../../utils/modification_utils"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import CoffeeSchedule from "./coffeeschedule"

const mSTP = ({
    entities: { confidants, conurbations, confabs },
    session: { ccId },
}) => {
    return {
        confidants: confidants,
        conurbations: selectAllConurbations(conurbations),
        confabs: selectAllConfabs(confabs),
        ccId: ccId,
        loggedIn: Boolean(ccId),
        signUpLink: (
            <Link to="/signup" className="coffeeschedule-signup-link">
                sign up
            </Link>
        ),
        shorterConurbationName: shorterConurbationName,
        determineWhetherConfidantIsAttending: determineWhetherConfidantIsAttending,
        filterConfabsByConfabLocationId: filterConfabsByConfabLocationId,
        convertDatetimeStringToObject: convertDatetimeStringToObject,
    }
}

const mDTP = (dispatch) => {
    return {
        loadConfabs: () => dispatch(fetchFilteredApiConfabs()),
        joinConfab: (confabId) => dispatch(joinConfab(confabId)),
        leaveConfab: (confabId, confidantId) =>
            dispatch(leaveConfab(confabId, confidantId)),
    }
}

export default connect(mSTP, mDTP)(CoffeeSchedule)
