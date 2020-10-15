import { connect } from "react-redux"
import { selectAllConurbations } from "../../../reducers/selectors"
import { deleteAccount } from "../../../actions/session_actions"
import { fetchAllApiConurbations } from "../../../actions/conurbations_actions"
import ConfidantEdit from "./confidantedit"

const mSTP = ({
    entities: { confidants, conurbations },
    session: { ccId },
}) => {
    return {
        ccId: ccId,
        confidant: confidants[ccId],
        conurbations: selectAllConurbations(conurbations),
    }
}

const mDTP = (dispatch) => {
    return {
        loadConurbations: () => dispatch(fetchAllApiConurbations()),
        deleteAccount: (confidantId) => dispatch(deleteAccount(confidantId)),
    }
}

export default connect(mSTP, mDTP)(ConfidantEdit)
