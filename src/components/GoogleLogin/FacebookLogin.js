import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';


function MyFacebookLogin() {
    const responseFacebook = (response) => {
          console.log(response);
        }
  return <div>
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
   
    callback={responseFacebook} />
  </div>;
}

export default MyFacebookLogin;
