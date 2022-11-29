import { Box, KeyboardAvoidingView, ScrollView } from "native-base";
import * as React from "react";
import { useState } from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { CustomText } from "../../atoms/Text";
import { ProfileTabbar, ProfileTab } from "../../organisms/ProfileTabbar";
import { BriefProfile } from "../../organisms/BriefProfile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";

const CurrentCoin = 150;

export interface ProfileMainScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const ProfileMainScreen: React.FC<ProfileMainScreenProps> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const [currentTab, setCurrentTab] = useState<ProfileTab>(ProfileTab.PROFILE);

  const getMainPane = () => {
    switch (currentTab) {
      case ProfileTab.PROFILE:
        return <BriefProfile navigation={navigation} />;
      default:
        return <></>;
    }
  };

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.WHITE_100}
    >
      <ScrollView bg={Color.WHITE_100} flex={1}>
        <Box
          height={8}
          width={48}
          borderRadius={16}
          backgroundColor={Color.COIN}
          borderColor={Color.COIN_BORDER}
          borderWidth={1}
          marginTop={`${insets.top}px`}
          marginLeft={2}
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <CustomMaterialIcon
            name={IconName.COIN}
            size="16px"
            color={Color.COIN_BORDER}
          />
          <CustomText
            color={Color.TEXT}
            fontType={FontType.SMALL_BOLD}
            style={{ marginLeft: 8 }}
          >
            {CurrentCoin} 今までの合計()
          </CustomText>
        </Box>
        <Box
          height={200}
          marginY="24px"
          backgroundColor={Color.MAIN}
          width={120}
          alignSelf="center"
        />
        <ProfileTabbar
          currentTab={currentTab}
          onCurrentTabChange={setCurrentTab}
        />
        {getMainPane()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
