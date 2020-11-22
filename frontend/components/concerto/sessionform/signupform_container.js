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
import { signin, signup } from "../../../actions/session_actions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import SessionForm from "./sessionform"

const mSTP = ({ entities: { conurbations } }) => {
	return {
		conurbations: selectAllConurbations(conurbations),
		conurbationsAreLoaded: areConurbationsLoaded(conurbations),
		demoConfidantConurbationId: selectParticularConurbationByName(
			conurbations,
			"Quarantine Cosmopolis, San Francisco Bay Area, California"
		),
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
		processMainForm: (confidant) => dispatch(signup(confidant)),
		processDemoForm: (confidant) => dispatch(signin(confidant)),
	}
}

export default connect(mSTP, mDTP)(SessionForm)
