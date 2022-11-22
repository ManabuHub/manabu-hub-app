import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Tabbar } from "../../components/organisms/Tabbar";
import { HomeScreen } from "../../components/screens/HomeScreen";
import { ScreenName } from "../../constants/ScreenName";
import { ProfileStack } from "../ProfileStack";

const Tab = createBottomTabNavigator();

const PlaceHolder: React.FC = () => {
  return <></>;
};

export const MainTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <Tabbar {...props} />}
    >
      <Tab.Screen name={ScreenName.HOME} component={HomeScreen} />
      <Tab.Screen name={ScreenName.SEARCH} component={HomeScreen} />
      <Tab.Screen name={ScreenName.PLACEHOLDER} component={PlaceHolder} />
      <Tab.Screen name={ScreenName.NOTIFICATION} component={HomeScreen} />
      <Tab.Screen name={ScreenName.PROFILE} component={ProfileStack} />
    </Tab.Navigator>
  );
};
