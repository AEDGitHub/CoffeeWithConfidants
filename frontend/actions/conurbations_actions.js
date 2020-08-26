import * as ConurbationsApiUtils from "../utils/conurbations_api_utils"

// Conurbation Actions
export const RECEIVE_ALL_CONURBATIONS = "RECEIVE_ALL_CONURBATIONS"
export const CLEAR_ALL_CONURBATIONS = "CLEAR_ALL_CONURBATIONS"

const receiveAllConurbations = (conurbations) => {
    return {
        type: RECEIVE_ALL_CONURBATIONS,
        conurbations,
    }
}

export const clearAllConurbations = () => {
    return {
        type: CLEAR_ALL_CONURBATIONS,
    }
}

// Thunk Action Creators
export const getAllApiConurbations = () => {
    return (dispatch) => {
        return ConurbationsApiUtils.getAllApiConurbations().then(
            (conurbations) => {
                dispatch(receiveAllConurbations(conurbations))
            }
        )
    }
}

export const ditchAllConurbations = () => {
    return (dispatch) => {
        dispatch(clearAllConurbations())
    }
}
