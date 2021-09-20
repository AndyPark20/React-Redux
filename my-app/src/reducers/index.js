
//Import combineReducers method to reduce all the different reducers into one single reducing function
import { combineReducers } from "redux";


//List of Songs (using reducer to render list of songs is an overkill)
const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'Martin Garrix', duration: '2:00' }
  ];
};

//Current playing song or change to user Selected song
const selectedSongReducer =(selectedSong =null,actions)=>{
    if(actions.type==='SONG_SELECTED'){
      return actions.payload
    }
    return selectedSong;
}

//use the combinedReducer method to create an object that has all the reducer in "STORE";
export default combineReducers({
  song:songReducer,
  selectedSong: selectedSongReducer
});




















// import { combineReducers } from "redux";


// const songsReducer =()=>{

//   return [
//   {title:'No Scrubs', duration:'4:05'},
//   {title:'Macarena', duration:'2:30'},
//   {title:'All Star', duration:'3:15'},
//   {title:'Martin Garrix', duration:'2:00'}
//   ];

// };

// const selectedSongReducer=(selectedSong=null, action)=>{
//   if(action.type === 'SONG_SELECTED'){
//     return action.payload
//   }
//   return selectedSong;


// }


// //This is all the combined reducer called "STORE"
// export default combineReducers({
//   songs: songsReducer,
//   selectedSong:selectedSongReducer
// });
