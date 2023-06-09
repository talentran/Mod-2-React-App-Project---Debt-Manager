import React, { createContext, useState } from 'react'

export const loginContext = createContext();

const LoginContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleGoogleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
      };

  return (
    <loginContext.Provider value={{users, setUsers, isLoggedIn, setIsLoggedIn, user, setUser, handleGoogleLogout}}>
        {children}
    </loginContext.Provider>
  )
}

export default LoginContextProvider;
