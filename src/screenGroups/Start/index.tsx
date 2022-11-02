import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Welcome } from "../../components/screens/Welcome";
import { SignUp } from "../../components/screens/SignUp";
import { SignIn } from "../../components/screens/SignIn";
import { ScreenName } from "../../constants/ScreenName";

export const Start: React.FC = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={ScreenName.WELCOME} component={Welcome} />
      <AppStack.Screen name={ScreenName.SIGN_UP} component={SignUp} />
      <AppStack.Screen name={ScreenName.SIGN_IN} component={SignIn} />
    </AppStack.Navigator>
  );
};
