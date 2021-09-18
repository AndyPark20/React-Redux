import React,{Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component{
  render(){
    console.log(this.props)
    return <div>SongList</div>
  }

}

//We need to get the state object from the "Store" to the Child component here
//By convention we name the fucntion mapStatetoProps, but can name anything we want

function mapStateToProps(state){

//Will ALWAYS RETURN AN OBJECT --> The component will get it as a props!!!
return {songs: state.songs};
}

export default connect(mapStateToProps) (SongList);
