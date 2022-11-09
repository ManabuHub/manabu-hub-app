import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Tabbar } from "../../components/organisms/Tabbar";
import { HomeScreen } from "../../components/screens/HomeScreen";
import { ProfileScreen } from "../../components/screens/ProfileScreen";
import { ScreenName } from "../../constants/ScreenName";
import { NewPost } from "../NewPost";

export const Main: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <Tabbar {...props} />}
      >
        <Tab.Screen name={ScreenName.HOME} component={HomeScreen} />
        <Tab.Screen name={ScreenName.SEARCH} component={HomeScreen} />
        <Tab.Screen name={ScreenName.PLACEHOLDER} component={NewPost} />
        <Tab.Screen name={ScreenName.NOTIFICATION} component={HomeScreen} />
        <Tab.Screen name={ScreenName.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
