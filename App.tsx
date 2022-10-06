import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { extendTheme, NativeBaseProvider } from "native-base";
import { Start } from "./src/screens/Start";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "./src/providers/AuthProvider/AuthProvider";

// Define the config
const config = {
  fontConfig: {
    NotoSansJP: {
      300: {
        normal: "NotoSansJP-Thin",
      },
      400: {
        normal: "NotoSansJP-Regular",
      },
      500: { normal: "NotoSansJP-Medium" },
      700: { normal: "NotoSansJP-Bold" },
      900: {
        normal: "NotoSansJP-Black",
      },
    },
  },
  fonts: {
    heading: "NotoSansJP",
    body: "NotoSansJP",
    mono: "NotoSansJP",
  },
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  const [fontsLoaded] = useFonts({
    "NotoSansJP-Black": require("./assets/fonts/NotoSansJP-Black.otf"),
    "NotoSansJP-Bold": require("./assets/fonts/NotoSansJP-Bold.otf"),
    "NotoSansJP-Medium": require("./assets/fonts/NotoSansJP-Medium.otf"),
    "NotoSansJP-Regular": require("./assets/fonts/NotoSansJP-Regular.otf"),
    "NotoSansJP-Thin": require("./assets/fonts/NotoSansJP-Thin.otf"),
    "NotoSansJP-Light": require("./assets/fonts/NotoSansJP-Light.otf"),
  });
  const Tab = createBottomTabNavigator();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <AuthProvider>
            <Start />
          </AuthProvider>
          {/**<Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator> */}
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
