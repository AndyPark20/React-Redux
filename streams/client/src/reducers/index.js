import { combineReducers } from "redux";


const signedInOrOutFunction =(status =null, action)=>{
  console.log(action.type)
  // if(action.type ==='SIGN_OUT'){
  //   return action.payload;
  // }
  // return status;
  switch(action.type){
    case 'SIGN_OUT':
      console.log('signedOUT!');
      default:
        console.log('nothing found!')
  }
  return status;
}


export default combineReducers({
  signedInOrOut: signedInOrOutFunction
})
