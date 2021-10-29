// Action Creator (creates Action which is just a plain Js object)

const selectSong =(song)=>{
  //return an action
  return{
    type:'SONG_SELECTED',
    payload: song
  };
};
