import React from "react";
import { loginRequest, registerRequest } from ".";

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
        setError(e.toString());
        setLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match.");
    }

    setLoading(true);
    registerRequest(email, password)
      .then((registeredUser) => {
        setUser(registeredUser);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.toString());
        setLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        onLogin,
        onRegister,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
