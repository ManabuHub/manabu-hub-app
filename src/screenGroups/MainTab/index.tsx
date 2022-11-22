import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Tabbar } from "../../components/organisms/Tabbar";
import { HomeScreen } from "../../components/screens/HomeScreen";
import { ScreenName } from "../../constants/ScreenName";
import { NewPostStack } from "../NewPost";
import { ProfileStack } from "../ProfileStack";

const Tab = createBottomTabNavigator();

export const MainTab: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <Tabbar {...props} />}
      >
        <Tab.Screen name={ScreenName.HOME} component={HomeScreen} />
        <Tab.Screen name={ScreenName.SEARCH} component={HomeScreen} />
        <Tab.Screen name={ScreenName.PLACEHOLDER} component={NewPostStack} />
        <Tab.Screen name={ScreenName.NOTIFICATION} component={HomeScreen} />
        <Tab.Screen name={ScreenName.PROFILE} component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
