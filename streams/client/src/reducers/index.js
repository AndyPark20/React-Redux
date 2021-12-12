import { combineReducers } from "redux";


const signedInOrOutFunction =(status =null, action)=>{

  switch(action.type){
    case 'SIGN_OUT':
      return action.payload;
    case 'SIGN_IN':
      return action.payload;
      default:
        return status;
  }

}


export default combineReducers({
  signedInOrOut: signedInOrOutFunction
})
