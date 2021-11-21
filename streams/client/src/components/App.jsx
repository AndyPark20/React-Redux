import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

const pageOne =()=>{
  return(
    <div>PageOne</div>
    //BAD PRACTICE!!!
    //<a href="/pageTwo">Navigate to Page Two</a>
      //=== Will Fetch new HTML doc and will lose all your JS file!!!
      //=== Including all the inputs that user has submitted and even all the data that was fetched from the API!
  )
}

const pageTwo =()=>{
  return(
    <div>PageTwo</div>
  )
}

const App =()=>{
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component={pageOne}></Route>
        <Route path="/pageTwo" component={pageTwo}></Route>
      </div>
    </BrowserRouter>
  )
};


export default App;
