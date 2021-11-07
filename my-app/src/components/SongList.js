import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions/index'

import './songList.css';

 class SongList extends Component{

  renderList(){
    return this.props.songs.map((song,index)=>{
      return (
        <div key={index} className="align">
          <div>{song.title}</div>
          <button
          onClick={()=>this.props.selectSong(song)}
          className="button">Select</button>
        </div>
      );
    })
  }


  render(){
    return(
      <div>{this.renderList()}</div>
    )
  }
}


const mapStateToProps=(state)=>{
  console.log(state)
  return{songs:state.songs};

}

export default connect(mapStateToProps,{selectSong})(SongList);
