import { combineReducers } from 'redux';
import confidantsReducer from './confidants_reducer';

const entitiesReducer = combineReducers({
    confidants: confidantsReducer,
});

export default entitiesReducer;