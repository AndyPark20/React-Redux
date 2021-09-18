import React from 'react';
//if it is a named export then we don't need the curly braces, but if its not, then we do need the curly braces.
import SongList from './songList';


const App =()=>{
  return(
    <div>
      <SongList />
    </div>
  );
};

export default App;