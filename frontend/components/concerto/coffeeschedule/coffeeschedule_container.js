//todo: remember to have a ditchConfidants method that does not drop the current user from GS

import React from "react"
import {
    areConfabsLoaded,
    areConurbationsLoaded,
    selectAllConurbations,
    selectAllConfabs,
} from "../../../reducers/selectors"
import {
    fetchFilteredApiConfabs,
    ditchConfabs,
} from "../../../actions/confabs_actions"
import { joinConfab } from "../../../actions/conflations_actions"
import { ditchConurbations } from "../../../actions/conurbations_actions"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import CoffeeSchedule from "./coffeeschedule"
import { postApiConflation } from "../../../utils/conflations_api_utils"

const mSTP = (state) => {
    return {
        confabsAreLoaded: areConfabsLoaded(state),
        conurbationsAreLoaded: areConurbationsLoaded(state),
        confidants: state.entities.confidants, //use this when you're not going to iterate over the collection
        conurbations: selectAllConurbations(state), //use selectors when you are going to iterate over a collection
        confabs: selectAllConfabs(state), //use selectors when you are going to iterate over a collection
        signUpLink: (
            <Link to="/signup" className="coffeeschedule-signup-link">
                sign up
            </Link>
        ),
    }
}

const mDTP = (dispatch) => {
    return {
        loadConfabs: () => dispatch(fetchFilteredApiConfabs()),
        unloadConfabs: () => dispatch(ditchConfabs()),
        unloadConurbations: () => dispatch(ditchConurbations()),
        joinConfab: (confabId) => dispatch(joinConfab(confabId)),
    }
}

export default connect(mSTP, mDTP)(CoffeeSchedule)
