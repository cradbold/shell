import { createContext, useContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "./useLocalStorage";
import { fetchUserData } from "./../services"

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUserData] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  const login = useCallback(async () => {
    const userData = await fetchUserData();
    setUserData(userData);
    console.log(userData);
    navigate("/portal/dashboard", { replace: true });
  }, [setUserData, navigate]);

  const logout = useCallback(() => {
    setUserData(null);
    navigate("/", { replace: true });
  }, [setUserData, navigate]);

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
