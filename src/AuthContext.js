// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setEmailVerified(user ? user.emailVerified : false);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, emailVerified };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
