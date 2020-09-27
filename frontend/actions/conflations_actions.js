export const CLEAR_ALL_CONFLATIONS = "CLEAR_ALL_CONFLATIONS"

// Actions
const clearAllConflations = () => {
    return {
        type: CLEAR_ALL_CONFLATIONS,
    }
}

// Thunk Action Creators
export const ditchConflations = () => {
    return (dispatch) => {
        dispatch(clearAllConflations())
    }
}
