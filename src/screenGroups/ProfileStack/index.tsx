import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenName } from "../../constants/ScreenName";
import { ProfileMainScreen } from "../../components/screens/ProfileMainScreen";
import { ProfileEditScreen } from "../../components/screens/ProfileEditScreen";

export const ProfileStack: React.FC = () => {
  const ProfileStack = createNativeStackNavigator();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen
        name={ScreenName.PROFILE_MAIN}
        component={ProfileMainScreen}
      />
      <ProfileStack.Screen
        name={ScreenName.PROFILE_EDIT}
        component={ProfileEditScreen}
      />
    </ProfileStack.Navigator>
  );
};
