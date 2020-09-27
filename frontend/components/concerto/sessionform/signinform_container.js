import React from "react"
import {
    areConurbationsLoaded,
    selectParticularConurbationByName,
} from "../../../reducers/selectors"
import {
    fetchAllApiConurbations,
    ditchConurbations,
} from "../../../actions/conurbations_actions"
import { signin, ditchSessionErrors } from "../../../actions/session_actions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import SessionForm from "./sessionform"

const mSTP = (state) => {
    return {
        conurbations: state.entities.conurbations,
        conurbationsAreLoaded: areConurbationsLoaded(state),
        demoConfidantConurbationId: selectParticularConurbationByName(
            state,
            "Quarantine Cosmopolis, San Francisco Bay Area, California"
        ),
        sessionErrors: state.errors.session,
        formType: "signin",
        mainMsg: "Take your time...",
        subMsg: "Welcome back, Confidant! Let's get this caffeine.",
        unPlaceholder: "Username",
        pwPlaceholder: "Password",
        submitButtonText: "SIGN IN",
        navLink: (
            <Link to="/signup" className="sessionform-swap-link">
                Not a confidant yet? Squad up here
            </Link>
        ),
    }
}

const mDTP = (dispatch) => {
    return {
        loadConurbations: () => dispatch(fetchAllApiConurbations()),
        unloadConurbations: () => dispatch(ditchConurbations()),
        unloadSessionErrors: () => dispatch(ditchSessionErrors()),
        processMainForm: (confidant) => dispatch(signin(confidant)),
        processDemoForm: (confidant) => dispatch(signin(confidant)),
    }
}

export default connect(mSTP, mDTP)(SessionForm)
