import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './GoogleLogin.css';

const clientId = `${process.env.REACT_APP_YOUR_CLIENT_ID}.apps.googleusercontent.com`;

function GoogleIn({ onGoogleLogin, className }) {
    const onSuccess = (res) => {
        onGoogleLogin(res.profileObj);
    };

    const onFailure = (res) => {
        console.log(res);
    };

    return (
        <GoogleLogin
            className={className}
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        >
            Log in with Google
        </GoogleLogin>
    );
}

export default GoogleIn;
