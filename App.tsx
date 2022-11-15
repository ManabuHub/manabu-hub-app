import React from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "./src/providers/AuthProvider/AuthProvider";
import { useFonts } from "expo-font";
import { All } from "./src/screenGroups/All";

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
    body: "NotoSansJP-Medium",
  },
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  type ICustomTheme = MyThemeType;
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <AuthProvider>
          <All />
        </AuthProvider>
        {/**<Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator> */}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
