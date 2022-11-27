import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Spacer,
  Box,
  VStack,
  HStack,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import * as React from "react";
import { Platform } from "react-native";
import { Color } from "../../../constants/Color";
import { IconName } from "../../../constants/IconName";
import { ScreenName } from "../../../constants/ScreenName";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";

interface SettingMuteAccountProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SettingMuteAccount: React.FC<SettingMuteAccountProps> = ({
  navigation,
}) => {
  const sideMargin = "70px";
  const iconSize = "35px";
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.BASE}
    >
      <ScrollView bg={Color.BASE}>
        <VStack
          flex={1}
          space={12}
          justifyContent="space-between"
          bg={Color.BASE}
          safeArea
        >
          <HStack marginY="10px" position="relative">
            <Box position="absolute" left="16px" top="-2px" zIndex={100}>
              <Pressable
                position="relative"
                onPress={() => {
                  navigation.navigate(ScreenName.MAIN, {
                    screen: ScreenName.PROFILE,
                    params: { screen: ScreenName.PROFILE_MAIN },
                  });
                }}
              >
                <CustomMaterialIcon
                  size="28px"
                  color={Color.MAIN}
                  name={IconName.ARROW_BACK}
                />
              </Pressable>
            </Box>
            <HStack
              w="100%"
              alignItems="center"
              justifyContent="center"
              space="8px"
              zIndex={1}
            >
              <Box>
                <CustomText fontType={FontType.LARGE_BOLD} color={Color.TEXT}>
                  ミュート中のユーザー
                </CustomText>
              </Box>
            </HStack>
          </HStack>
          <VStack space={5}>
            <Box ml="30px" mr="30px">
              <CustomText fontType={FontType.LARGE_BOLD} color={Color.TEXT}>
                ミュート中のユーザー数：１
              </CustomText>
            </Box>
            <HStack ml={sideMargin} mr={sideMargin}>
              <CustomText fontType={FontType.LARGE_BOLD} color={Color.TEXT}>
                ピヨ子
              </CustomText>
              <Spacer />
              <CustomMaterialIcon
                size={iconSize}
                color={Color.INVALID}
                name={IconName.MUTE}
              ></CustomMaterialIcon>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
