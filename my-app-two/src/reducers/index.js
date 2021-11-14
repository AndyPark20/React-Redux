//No need for importing react because this is just a function

import { combineReducers } from "redux";
import {postReducer} from "./postReducer";
import { userReducer } from "./usersReducer";




export default combineReducers({
  //Put dummy variable
  posts:postReducer,
  users:userReducer
});


//Do Not mutate state!
 //for arrays --> use Spread operator
 //for Object --> use spread operator
 //to remove values in array ---> use filter method!
