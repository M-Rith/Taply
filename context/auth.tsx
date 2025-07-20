// context/auth.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  user: null | string; // replace with user object if using Firebase/Supabase
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | string>(null);

  const login = (token: string) => {
    setUser(token);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
