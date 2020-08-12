import React from "react";
import {
    areConurbationsLoaded,
    getAllConurbations,
    getParticularConurbation,
} from "../../../reducers/selectors";
import { getAllApiConurbations } from "../../../actions/conurbations_actions";
import { signin } from "../../../actions/session_actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SessionForm from "./sessionform";

const mSTP = (state) => {
    return {
        conurbations: getAllConurbations(state),
        conurbationsAreLoaded: areConurbationsLoaded(state),
        demoConfidantConurbationId: getParticularConurbation(
            state,
            "Quarantine Cosmopolis, San Francisco Bay Area, California"
        ),
        errors: state.errors.session,
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
    };
};

const mDTP = (dispatch) => {
    return {
        loadConurbations: () => dispatch(getAllApiConurbations()),
        processMainForm: (confidant) => dispatch(signin(confidant)),
        processDemoForm: (confidant) => dispatch(signin(confidant)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
