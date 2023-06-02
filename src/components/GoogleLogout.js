import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function GoogleOut({ onGoogleLogout }) {
    const onSuccess = () => {
        alert('Logout made successfully');
        
        /// navagatie("/")
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default GoogleOut;
