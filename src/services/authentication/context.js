import React from "react";
import { loginRequest } from ".";

export const AuthenticationContext = React.createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((loggedUser) => {
        setUser(loggedUser);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider value={{ user, loading, error, onLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
