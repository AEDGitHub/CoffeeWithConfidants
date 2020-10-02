import { connect } from "react-redux"
import { logout } from "../../../actions/session_actions"
import NavLinks from "./navlinks"

const mSTP = ({ session, entities: { confidants } }) => {
    return {
        currentConfidant: confidants[session.ccId],
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mSTP, mDTP)(NavLinks)
