import React, {Component} from 'react';
import {connect} from 'react-redux';

import './songList.css';

 class SongList extends Component{

  renderList(){
    return this.props.songs.map((song,index)=>{
      return (
        <div key={index} className="align">
          <div>{song.title}</div>
          <button className="button">Select</button>
        </div>
      );
    })
  }


  render(){
    console.log(this.props.songs)
    return(
      <div>{this.renderList()}</div>
    )
  }
}


const mapStateToProps=(state)=>{
  return{songs:state.songs};

}

export default connect(mapStateToProps)(SongList);
