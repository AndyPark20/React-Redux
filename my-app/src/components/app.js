//App.js is going to be the the parent component
import React, {Component} from 'react';
//Import SongList
import SongList from './songList';

//create a class Component
export class App extends Component {
  render(){
    return (
      <div><SongList/></div>
    )
  }
}






























// import React from 'react';
// //if it is a named export then we don't need the curly braces, but if its not, then we do need the curly braces.
// import SongList from './songList';


// const App =()=>{
//   return(
//     <div>
//       <SongList />
//     </div>
//   );
// };

// export default App;
