import { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";

export const useBriefProfile = () => {
  // Debug purpose
  const handleSignOut = useCallback(() => {
    signOut(auth).then(() => {
      console.log("Successfully Logged out");
    });
  }, []);

  return { handleSignOut };
};
