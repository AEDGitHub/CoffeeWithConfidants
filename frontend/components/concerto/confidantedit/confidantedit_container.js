import { connect } from "react-redux"
import { selectAllConurbations } from "../../../reducers/selectors"
import { ditchConfabs } from "../../../actions/confabs_actions"
import {
	fetchAllApiConurbations,
	ditchConurbations,
} from "../../../actions/conurbations_actions"
import { deleteAccount, updateAccount } from "../../../actions/session_actions"
import ConfidantEdit from "./confidantedit"

const mSTP = ({
	entities: { confidants, conurbations },
	session: { ccId },
}) => {
	return {
		ccId: ccId,
		confidant: confidants[ccId],
		conurbations: selectAllConurbations(conurbations),
		demoConfidantLoggedIn: Boolean(ccId === 1),
	}
}

const mDTP = (dispatch) => {
	return {
		loadConurbations: () => dispatch(fetchAllApiConurbations()),
		unloadConfabs: () => dispatch(ditchConfabs()),
		unloadConurbations: () => dispatch(ditchConurbations()),

		deleteAccount: (confidantId) => dispatch(deleteAccount(confidantId)),
		updateAccount: (confidant) => dispatch(updateAccount(confidant)),
	}
}

export default connect(mSTP, mDTP)(ConfidantEdit)
