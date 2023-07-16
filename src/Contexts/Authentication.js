import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  token: null,
  setToken: (d) => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const tokenCached = localStorage.getItem("Token");

  useEffect(() => {
    if (tokenCached) {
      setToken(tokenCached);
    }
  }, [tokenCached]);

  const value = {
    token,
    setToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
