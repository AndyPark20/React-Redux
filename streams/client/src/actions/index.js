
export const signIn =(status)=>{
  console.log(status)
  return {
    type:'SIGN_IN',
    payload:status
  };
};

export const signOut =(status)=>{
  return{
    type:'SIGN_OUT',
    payload:status
  };
};
