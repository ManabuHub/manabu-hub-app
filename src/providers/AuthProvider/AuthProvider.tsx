import { getAuth, onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { useEffect, useMemo } from "react";
import { createContext, ReactNode, useState } from "react";
import { User } from "../../domain/types/User";
import { UserRepository } from "../../repositories/UserRepository";

export interface AuthContextValueType {
  userId: string | null;
  user: User | null;
  setUserId: (userId: string) => void;
  setUser: (user: User) => void;
}

export const AuthContext = createContext({} as AuthContextValueType);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const contextValue = { userId, user, setUserId, setUser };
  const userRepository = useMemo(() => new UserRepository(), []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (tempUser) => {
      if (tempUser) {
        setUserId(tempUser.uid);
        const user = await userRepository.getById(tempUser.uid);
        if (user) {
          setUser(user);
        }
      } else {
        setUserId(null);
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
