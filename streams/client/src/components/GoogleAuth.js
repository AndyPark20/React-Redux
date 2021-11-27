import React from 'react';


class GoogleAuth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:
          "115216850645-dvhh369cv2ht2opv7lq30aif2f7r0ru9.apps.googleusercontent.com",
      });
    });

  }

  render(){
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;
