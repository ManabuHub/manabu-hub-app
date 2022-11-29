import { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { ScreenName } from "../../../constants/ScreenName";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useBriefProfile = (
  navigation: NativeStackNavigationProp<any, any>
) => {
  const handleEditPress = useCallback(() => {
    navigation.navigate(ScreenName.MAIN, {
      screen: ScreenName.PROFILE,
      params: {
        screen: ScreenName.PROFILE_EDIT,
      },
    });
  }, []);

  // Debug purpose
  const handleSignOut = useCallback(() => {
    signOut(auth).then(() => {
      console.log("Successfully Logged out");
    });
  }, []);

  return { handleEditPress, handleSignOut };
};
