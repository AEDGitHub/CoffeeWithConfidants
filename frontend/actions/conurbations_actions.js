import * as ConurbationsApiUtils from "../utils/conurbations_api_utils";

// Conurbation Actions
export const RECEIVE_ALL_CONURBATIONS = "RECEIVE_ALL_CONURBATIONS";

const receiveAllConurbations = (conurbations) => {
    return {
        type: RECEIVE_ALL_CONURBATIONS,
        conurbations,
    };
};

// Thunk Action Creators
export const getAllApiConurbations = () => {
    return (dispatch) => {
        return ConurbationsApiUtils.getAllApiConurbations().then(
            (conurbations) => {
                dispatch(receiveAllConurbations(conurbations));
            }
        );
    };
};
