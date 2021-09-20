// Import React
import React from 'react';

//Import Connect component from react redux library
import {connect} from 'react-redux';


//this component will render the playlist

const SongDetail=({currentSong})=>{



  if(!currentSong){
    return(
      <div>
        Please select a song
      </div>
    )
  }
  return(
    <div>
      {currentSong.title}
    </div>
  )
}

//This will retrieve the state
function mapStateToProps(state){
  return{
    currentSong:state.selectedSong
  }
}

//call connect method --> this is going to allow the React components to retrieve state from the Provider component of Redux and also allow to update
export default connect(mapStateToProps)(SongDetail)
