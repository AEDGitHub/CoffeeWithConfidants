import { combineReducers } from 'redux';
import confidantsReducer from './confidants_reducer';
import conurbationsReducer from './conurbations_reducer';

const entitiesReducer = combineReducers({
    confidants: confidantsReducer,
    conurbations: conurbationsReducer,
});

export default entitiesReducer;