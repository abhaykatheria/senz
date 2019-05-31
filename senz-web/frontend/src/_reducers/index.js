import { combineReducers } from "redux";
import { toggleHeadingReducer } from "./headingReducer";
import authReducer from "./authReducers";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  heading: toggleHeadingReducer,
  form: formReducer,
  auth: authReducer
});