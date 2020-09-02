import * as ConfabsApiUtils from "../utils/confabs_api_utils"

// Confab Actions
export const RECEIVE_ALL_CONFABS = "RECEIVE_ALL_CONFABS"
export const CLEAR_ALL_CONFABS = "CLEAR_ALL_CONFABS"

const receiveAllConfabs = (confabs) => {
    return {
        type: RECEIVE_ALL_CONFABS,
        confabs,
    }
}

export const clearAllConfabs = () => {
    return {
        type: CLEAR_ALL_CONFABS,
    }
}

// Thunk Action Creators
export const getAllApiConfabs = () => {
    return (dispatch) => {
        return ConfabsApiUtils.getAllApiConfabs().then((confabs) => {
            dispatch(receiveAllConfabs(confabs))
        })
    }
}

export const ditchConfabs = () => {
    return (dispatch) => {
        dispatch(clearAllConfabs())
    }
}
