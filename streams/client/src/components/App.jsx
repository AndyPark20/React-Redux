import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import StreamCreate from './streams/streamCreate';
import StreamDelete from "./streams/streamDelete";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamShow from "./streams/streamShow";
import Header from "./Header";




const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />

          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

//Working on OAuth
  //Different from Traditional Authentication where you store credentials on DB and match with email and password
  //OAuth uses outside servers like FB and LinkedIn to validate credentials.


//OAuth for Servers vs OAuth for Js Browser Apps
  //difference is that Servers will access user data when they are not logged in
  //While Js Browser Apps will only access user data while they are logged in.

//Work on Oauth set up with Google
