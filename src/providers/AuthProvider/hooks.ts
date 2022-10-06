import { useContext } from "react";
import { AuthContext, AuthContextValueType } from "./AuthProvider";

export const useAuth = (): AuthContextValueType => {
  const { userId, setUserId } = useContext(AuthContext);
  return { userId, setUserId };
};
