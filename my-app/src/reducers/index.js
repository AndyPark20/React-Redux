// import { combineReducers } from "redux";


// const songReducer = () => {
//   return [
//     { title: "Animals", duration: "4:05" },
//     { title: "I don't wanna miss a thing", duration: "3:15" },
//     { title: "Lucky", duration: "2:45" },
//   ];
// };

// const selectedSongReducer = (selectedSong = null, action) => {
//   if (action.type === "SONG_SELECTED") {
//     return action.payload;
//   }
//   return selectedSong;
// };



// export default combineReducers({
//   songs: songReducer,
//   selectedSong: selectedSongReducer
// })


import {combineReducers} from 'react-redux';


//create a reducer that has the state object

const songList =()=>{
  return [
    { track: "Austin Texas Circuit", duration: "1hr and 30mins" },
    { track: "Ciuidad Mexico Circuit", duration: "2hr and 50mins" },
    { track: "Abu Dabi", duration: "3hr and 35mins" },
  ];
}


const songReducer =(currentSong =null, action)=>{
  if(action.payload ==='SONG_SELECTED'){
    return action.payload.track
  }
  return currentSong
}


export default combineReducers({
  songs:songList,
  songReducer:songReducer
});
