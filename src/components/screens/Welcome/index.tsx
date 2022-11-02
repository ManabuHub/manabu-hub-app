import * as React from "react";
import { Spacer, VStack, Box } from "native-base";
import { CapsuleButton } from "../../atoms/CapsuleButton";
import { Color } from "../../../constants/Color";
import { ButtonColorScheme } from "../../../constants/ButtonColorScheme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import LOGO from "../../../constants/Image/Logo.svg";
import { SvgUri } from "react-native-svg";

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const Welcome: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Box
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
      bg={Color.BASE}
      safeArea
    >
      <Spacer />
      <SvgUri uri={LOGO} />
      <Spacer />
      <VStack space={8}>
        <CapsuleButton
          text="新規登録"
          colorScheme={ButtonColorScheme.PRIMARY}
          onPress={() => {
            navigation.navigate(ScreenName.SIGN_UP);
          }}
        />
        <CapsuleButton
          text="ログイン"
          colorScheme={ButtonColorScheme.SECONDARY}
          onPress={() => {
            navigation.navigate(ScreenName.SIGN_IN);
          }}
        />
      </VStack>
      <Spacer />
    </Box>
  );
};
