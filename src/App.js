import React, { useEffect, useState } from "react";
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import LoanBorrowApp from './components/LoanBorrowApp';
import GoogleIn from './components/GoogleLogin';
import GoogleOut from './components/GoogleLogout';
import { gapi } from 'gapi-script';
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  console.log(gapi)


  
  useEffect(() => {
    const clientId = `${process.env.REACT_APP_YOUR_CLIENT_ID}.apps.googleusercontent.com`;
    const start = () => {
      gapi.client.init({
        client_Id: clientId,
        scope: ""
      })
    };
    gapi.load("client:auth2", start);
  }, []);

  const handleLogin = (userID, password) => {
    if (userID === 'Tri' && password === 'admin') {
      setUser({ name: userID });
      setIsLoggedIn(true);
    } else {
      alert('Sorry, in this version only Tri is allowed to login');
    }
  };

  const handleGoogleLogin = (googleUser) => {
    setUser(googleUser);
    setIsLoggedIn(true);
  };

  const handleGoogleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleSignUp = (userID, password) => {
    if (users[userID]) {
      alert('This user ID has been taken');
    } else {
      setUsers({ ...users, [userID]: password });
      setIsSignUp(false);
    }
  };

  if (!isLoggedIn) {
    if (isSignUp) {
      return <SignUpForm onSignUp={handleSignUp} />;
    } else {
      return (
        <>
          <LoginForm onLogin={handleLogin} onSignUpClick={() => setIsSignUp(true)} onGoogleLogin={handleGoogleLogin} />
          <GoogleIn user={user} setUser={setUser} onGoogleLogin={handleGoogleLogin} />
        </>
      );
    }
  }

  return (
    <>
      <LoanBorrowApp user={user} />
      <GoogleOut setUser={setUser} onGoogleLogout={handleGoogleLogout} />
    </>
  );
}

export default App;
