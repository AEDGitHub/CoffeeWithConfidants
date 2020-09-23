/* 
!!eventually I'd like to have a standardized naming convention to 
avoid my own confusion as to whether a component is asking for something from
the store or actually sending an AJAX call to the backend to grab something
from the database. For instance, I'm using "ditch" as a verb to remove
objects from state that are no longer needed, but "get" is confusing because
an actual GET request takes place from utils -> backend, so I'd like to switch
back to, say, "fetch" when describing something that's happening from the 
frontend store to the frontend component.
!!end of comment
*/

import React from "react"
import {
    areConurbationsLoaded,
    selectAllConurbations,
    selectParticularConurbationByName,
} from "../../../reducers/selectors"
import {
    fetchAllApiConurbations,
    ditchConurbations,
} from "../../../actions/conurbations_actions"
import {
    signin,
    signup,
    ditchSessionErrors,
} from "../../../actions/session_actions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import SessionForm from "./sessionform"

const mSTP = (state) => {
    return {
        conurbations: selectAllConurbations(state),
        conurbationsAreLoaded: areConurbationsLoaded(state),
        demoConfidantConurbationId: selectParticularConurbationByName(
            state,
            "Quarantine Cosmopolis, San Francisco Bay Area, California"
        ),
        sessionErrors: state.errors.session,
        formType: "signup",
        mainMsg: "Ready to squad up?",
        subMsg:
            "Literally dozens of App Academy students and my friends have signed up out of sheer boredom. Create an account to be as underwhelmed by my talents as they are!",
        unPlaceholder: "Username (pick something cool!)",
        pwPlaceholder: "Password (7 characters or more, Ace.)",
        submitButtonText: "SIGN UP",
        navLink: (
            <Link to="/signin" className="sessionform-swap-link">
                Already a confidant? Get back in here
            </Link>
        ),
    }
}

const mDTP = (dispatch) => {
    return {
        loadConurbations: () => dispatch(fetchAllApiConurbations()),
        unloadConurbations: () => dispatch(ditchConurbations()),
        unloadSessionErrors: () => dispatch(ditchSessionErrors()),
        processMainForm: (confidant) => dispatch(signup(confidant)),
        processDemoForm: (confidant) => dispatch(signin(confidant)),
    }
}

export default connect(mSTP, mDTP)(SessionForm)
