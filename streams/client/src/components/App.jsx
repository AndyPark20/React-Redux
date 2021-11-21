import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

const pageOne =()=>{
  return(
    <div>PageOne</div>
  )
}

const PageTwo =()=>{
  return(
    <div>PageTwo</div>
  )
}

const App =()=>{
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component={pageOne}></Route>
        <Route path="/pageTwo"
      </div>
    </BrowserRouter>
  )
};


export default App;
