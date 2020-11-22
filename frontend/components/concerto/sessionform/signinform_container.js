import React from "react"
import {
	areConurbationsLoaded,
	selectParticularConurbationByName,
} from "../../../reducers/selectors"
import {
	fetchAllApiConurbations,
	ditchConurbations,
} from "../../../actions/conurbations_actions"
import { signin } from "../../../actions/session_actions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import SessionForm from "./sessionform"

const mSTP = ({ entities: { conurbations } }) => {
	return {
		conurbations: conurbations,
		conurbationsAreLoaded: areConurbationsLoaded(conurbations),
		demoConfidantConurbationId: selectParticularConurbationByName(
			conurbations,
			"Quarantine Cosmopolis, San Francisco Bay Area, California"
		),
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
		processMainForm: (confidant) => dispatch(signin(confidant)),
		processDemoForm: (confidant) => dispatch(signin(confidant)),
	}
}

export default connect(mSTP, mDTP)(SessionForm)
