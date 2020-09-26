import { getFilteredApiConfabs } from "../utils/confabs_api_utils"

// Confab Actions
export const RECEIVE_ALL_CONFABS = "RECEIVE_ALL_CONFABS"
export const CLEAR_ALL_CONFABS = "CLEAR_ALL_CONFABS"

const receiveAllConfabs = ({
    confabs,
    confidants,
    conurbations,
    conflations,
}) => {
    return {
        type: RECEIVE_ALL_CONFABS,
        confabs,
        confidants,
        conurbations,
        conflations,
    }
}

export const clearAllConfabs = () => {
    return {
        type: CLEAR_ALL_CONFABS,
    }
}

// Thunk Action Creators
export const fetchFilteredApiConfabs = () => {
    return (dispatch) => {
        return getFilteredApiConfabs().then((payload) => {
            dispatch(receiveAllConfabs(payload))
        })
    }
}

export const ditchConfabs = () => {
    return (dispatch) => {
        dispatch(clearAllConfabs())
    }
}
