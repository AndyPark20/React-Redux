
export const signIn =(status)=>{
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
