import { combineReducers } from 'redux';
import { homepageReducer } from "./reducers/homepageReducer";

export default combineReducers({
    homepage : homepageReducer,
});
