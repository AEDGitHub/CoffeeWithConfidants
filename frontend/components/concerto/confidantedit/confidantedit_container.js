import { connect } from "react-redux"
import {
    selectAllConurbations,
    selectParticularConfidantById,
} from "../../../reducers/selectors"
import { fetchAllApiConurbations } from "../../../actions/conurbations_actions"
import ConfidantEdit from "./confidantedit"

const mSTP = ({
    errors,
    entities: { confidants, conurbations },
    session: { ccId },
}) => {
    return {
        confidant: selectParticularConfidantById(confidants, ccId),
        conurbations: selectAllConurbations(conurbations),
    }
}

const mDTP = (dispatch) => {
    return {
        loadConurbations: () => dispatch(fetchAllApiConurbations()),
    }
}

export default connect(mSTP, mDTP)(ConfidantEdit)
