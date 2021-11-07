import React, {Component} from 'react';
import {connect} from 'react-redux'

 class SongList extends Component{
  render(){
    return(
      <div>SongList</div>
    )
  }
}


const mapStateToProps=(state)=>{

  return state;
}

export default connect(mapStateToProps)(SongList);
