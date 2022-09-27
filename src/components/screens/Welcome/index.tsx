import * as React from "react";
import { Spacer, VStack, Text, Box } from "native-base";
import { CapsuleButton } from "../../atoms/CapsuleButton";
import { Color } from "../../../constants/Color";
import { ButtonColorScheme } from "../../../constants/ButtonColorScheme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";

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
      <Text
        fontSize="3xl"
        fontFamily="body"
        fontWeight={700}
        color={Color.MAIN}
      >
        まなぶHUB
      </Text>
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
