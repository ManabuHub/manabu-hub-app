import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ScreenName } from "../../constants/ScreenName";
import { MainTab } from "../MainTab";
import { NewPostStack } from "../NewPostStack";
import { SettingStack } from "../SettingStack";

const Stack = createNativeStackNavigator();

export const MainOuterStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ScreenName.MAIN} component={MainTab} />
        <Stack.Screen name={ScreenName.NEW_POST} component={NewPostStack} />
        <Stack.Screen name={ScreenName.SETTING} component={SettingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
