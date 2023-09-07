import {combineReducers} from "redux";

import groundReducer from "./GroundReducer";
export default combineReducers({
    grounds:groundReducer
})