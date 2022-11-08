import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { WelcomeScreen } from "../../components/screens/WelcomeScreen";
import { SignUpScreen } from "../../components/screens/SignUpScreen";
import { SignInScreen } from "../../components/screens/SignInScreen";
import { ScreenName } from "../../constants/ScreenName";
import { NavigationContainer } from "@react-navigation/native";

export const Start: React.FC = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name={ScreenName.WELCOME} component={WelcomeScreen} />
        <AppStack.Screen name={ScreenName.SIGN_UP} component={SignUpScreen} />
        <AppStack.Screen name={ScreenName.SIGN_IN} component={SignInScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
