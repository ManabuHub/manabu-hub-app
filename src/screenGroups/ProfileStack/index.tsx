import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { ScreenName } from "../../constants/ScreenName";
import { ProfileMainScreen } from "../../components/screens/ProfileMainScreen";
import { ProfileEditScreen } from "../../components/screens/ProfileEditScreen";
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from "@react-navigation/native";

export interface ProfileStackProps {
  navigation: any;
  route: RouteProp<any, any>;
}

export const ProfileStack: React.FC<ProfileStackProps> = ({
  navigation,
  route,
}) => {
  const Stack = createNativeStackNavigator();
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === ScreenName.PROFILE_EDIT) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ScreenName.PROFILE_MAIN}
        component={ProfileMainScreen}
      />
      <Stack.Screen
        name={ScreenName.PROFILE_EDIT}
        component={ProfileEditScreen}
      />
    </Stack.Navigator>
  );
};
