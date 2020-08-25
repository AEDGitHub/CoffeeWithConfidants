import * as ConfabsApiUtils from "../utils/confabs_api_utils"

// Confab Actions
export const RECEIVE_ALL_CONFABS = "RECEIVE_ALL_CONFABS"
export const UNLOAD_ALL_CONFABS = "UNLOAD_ALL_CONFABS"

export const unloadAllConfabs = () => {
    return {
        type: UNLOAD_ALL_CONFABS,
    }
}

const receiveAllConfabs = (confabs) => {
    return {
        type: RECEIVE_ALL_CONFABS,
        confabs,
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

export const clearStoreConfabs = () => {
    return (dispatch) => {
        dispatch(unloadAllConfabs())
    }
}
