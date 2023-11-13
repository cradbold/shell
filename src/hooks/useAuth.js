import { createContext, useContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "./useLocalStorage";
import { fetchUserToken } from "./../services"

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  const login = useCallback(async () => {
    const userData = await fetchUserToken();
    setUser(userData);
    console.log(userData);
    navigate("/portal/dashboard", { replace: true });
  }, [setUser, navigate]);

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [setUser, navigate]);

  const value = useMemo(() => ({
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
