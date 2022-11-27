import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenName } from "../../constants/ScreenName";
import { SettingMain } from "../../components/screens/SettingMain";
import { SettingAccount } from "../../components/screens/SettingAccount";
import { SettingMuteAccount } from "../../components/screens/SettingMuteAccount";

export type SettingParamList = {
  [ScreenName.SETTING_MAIN]: undefined;
  [ScreenName.SETTING_ACCOUNT]: undefined;
  [ScreenName.SETTING_MUTE_ACCOUNT]: undefined;
};

export const Setting: React.FC = () => {
  const Setting = createNativeStackNavigator<SettingParamList>();

  return (
    <Setting.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Setting.Screen name={ScreenName.SETTING_MAIN} component={SettingMain} />
      <Setting.Screen
        name={ScreenName.SETTING_ACCOUNT}
        component={SettingAccount}
      />
      <Setting.Screen
        name={ScreenName.SETTING_MUTE_ACCOUNT}
        component={SettingMuteAccount}
      />
    </Setting.Navigator>
  );
};
