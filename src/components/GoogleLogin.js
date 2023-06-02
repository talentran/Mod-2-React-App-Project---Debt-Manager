import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = `${process.env.REACT_APP_YOUR_CLIENT_ID}.apps.googleusercontent.com`;


function GoogleIn({ user, onGoogleLogin, setUser }) {


    const onSuccess = (res) => {
        console.log(res.profileObj);
        setUser(res.profileObj)
    };


    console.log(user)
    const onFailure = (res) => {
        console.log(res);
    };

    return (
        <div>
            <GoogleLogin
                sandbox="allow-same-origin"
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                // style={{ marginTop: '100px' }}
                // isSignedIn={true}

            />
        </div>
    );
}

export default GoogleIn;
