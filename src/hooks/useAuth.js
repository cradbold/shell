import { createContext, useContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  const login = useCallback(async (data) => {
    await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30, // optional
      })
    })
    .then(response => response.json())
    // .then(console.log)
    .then((userData) => {
      console.log(userData);
      setUser(userData);
      navigate("/portal/dashboard", { replace: true });
    });
  }, [setUser, navigate]);

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [setUser, navigate]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
