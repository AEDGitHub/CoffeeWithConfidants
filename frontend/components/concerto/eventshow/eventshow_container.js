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

const mSTP = (
	{ session: { ccId }, entities: { confidants, conurbations, confabs } },
	ownProps
) => {
	return {
		ccId: ccId,
		confab: confabs[ownProps.match.params.confabId],
		confidants: confidants,
		conurbations: conurbations,
		loggedIn: Boolean(ccId),
		convertDatetimeStringToObject: convertDatetimeStringToObject,
		determineWhetherConfidantIsAttending: determineWhetherConfidantIsAttending,
		restOfConurbationName: restOfConurbationName,
		shorterConurbationName: shorterConurbationName,
	}
}

const mDTP = (dispatch) => {
	return {
		joinConfab: (confabId) => dispatch(joinConfab(confabId)),
		leaveConfab: (confabId, confidantId) =>
			dispatch(leaveConfab(confabId, confidantId)),
		loadConfab: (confabId) => dispatch(fetchFilteredApiConfabs(confabId)),
	}
}

export default connect(mSTP, mDTP)(EventShow)
