import { combineReducers } from "redux";


const songReducer = () => {
  return [
    { title: "Animals", duration: "4:05" },
    { title: "I don't wanna miss a thing", duration: "3:15" },
    { title: "Lucky", duration: "2:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};



export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
})
