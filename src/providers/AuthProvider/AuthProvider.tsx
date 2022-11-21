import { getAuth, onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

export interface AuthContextValueType {
  userId: string | null;
  setUserId: (userId: string) => void;
}

export const AuthContext = createContext({} as AuthContextValueType);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const contextValue = { userId, setUserId };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else setUserId(null);
    });
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
