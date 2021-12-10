import { combineReducers } from "redux";


const signedInOrOutFunction =(status =null, action)=>{
  if(action.type ==='SIGN_OUT'){
    return action.payload;
  }
}


export default combineReducers({
  signedInOrOut: signedInOrOutFunction
})
