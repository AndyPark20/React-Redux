//No need for importing react because this is just a function

import { combineReducers } from "redux";
import postReducer from "./postReducer";




export default combineReducers({
  //Put dummy variable
  posts:postReducer
});
