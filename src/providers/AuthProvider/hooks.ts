import { useContext } from "react";
import { AuthContext, AuthContextValueType } from "./AuthProvider";

export const useAuth = (): AuthContextValueType => {
  const { userId, user, setUserId, setUser } = useContext(AuthContext);
  return { userId, user, setUserId, setUser };
};
