import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

const clientId = `${process.env.REACT_APP_YOUR_CLIENT_ID}.apps.googleusercontent.com`;

function GoogleOut({ onGoogleLogout }) {
    const onSuccess = () => {
        onGoogleLogout();
    };

    return (
        <GoogleLogout
            clientId={clientId}
            render={renderProps => (
                <button className="social-logout-btn google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <FaGoogle />
                    Log out
                </button>
            )}
            onLogoutSuccess={onSuccess}
        />
    );
}

export default GoogleOut;
