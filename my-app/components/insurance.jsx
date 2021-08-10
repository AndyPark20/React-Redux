import React from 'react';

//Redux LifeCycle
//Action Creator --> Action --> Dispatch --> Reducer --> State

const Insurance =()=>{
  const name ='Andy';
  const initialDeposit =20;

  //Create Policy
  //Create Action Creator (Creating Action aka forms)
  const createPolicy = (name, initialDeposit) => {
    return {
      type: 'CREATE_POLICY',
      payload: {
        name: name,
        initialDeposit: initialDeposit
      }
    }
  }

  return(
    <div>{console.log(createPolicy('Andy',20))}</div>
  )
}
