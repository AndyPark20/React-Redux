
const songsReducer =()=>{

  return [
  {title:'No Scrubs', duration:'4:05'},
  {title:'Macarena', duration:'2:30'},
  {title:'All Star', duration:'3:15'},
  {title:'Martin Garrix', duration:'2:00'}
  ];

};

const selectedSongReducer=(selectedSong=null, action)=>{
  if(action.type === 'SONG_SELECTED'){
    return action.payload
  }
  return selectedSong;
}
