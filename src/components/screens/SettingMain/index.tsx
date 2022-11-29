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

interface SettingMainProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SettingMain: React.FC<SettingMainProps> = ({ navigation }) => {
  const sideMargin = "30px";
  const iconSize = "35px";
  const arrowSize = "25px";
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.WHITE_100}
    >
      <ScrollView bg={Color.WHITE_100}>
        <VStack
          flex={1}
          space="50px"
          justifyContent="space-between"
          bg={Color.WHITE_100}
          safeArea
        >
          <HStack marginY="10px" position="relative">
            <Box position="absolute" left="16px" top="-2px" zIndex={100}>
              <Pressable
                position="relative"
                onPress={() => {
                  navigation.navigate(ScreenName.HOME);
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
                <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                  設定
                </CustomText>
              </Box>
            </HStack>
          </HStack>
          <VStack space="15px" mx={sideMargin}>
            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.SETTING, {
                  screen: ScreenName.SETTING_ACCOUNT,
                });
              }}
            >
              <HStack
                space="6px"
                flexDirection="row"
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <CustomMaterialIcon
                    size={iconSize}
                    color={Color.TEXT}
                    name={IconName.PERSON}
                  />
                  <CustomText color={Color.TEXT} fontType={FontType.SMALL_BOLD}>
                    アカウント設定
                  </CustomText>
                </HStack>
                <Spacer />
                <CustomMaterialIcon
                  size={arrowSize}
                  color={Color.MEDIUM_GRAY}
                  name={IconName.ARROW_FORWARD}
                />
              </HStack>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.SETTING, {
                  screen: ScreenName.SETTING_MAIN,
                });
              }}
            >
              <HStack
                space="6px"
                flexDirection="row"
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <CustomMaterialIcon
                    size={iconSize}
                    color={Color.TEXT}
                    name={IconName.BELL}
                  />
                  <CustomText color={Color.TEXT} fontType={FontType.SMALL_BOLD}>
                    通知
                  </CustomText>
                </HStack>
                <Spacer />
                <CustomMaterialIcon
                  size={arrowSize}
                  color={Color.MEDIUM_GRAY}
                  name={IconName.ARROW_FORWARD}
                />
              </HStack>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.SETTING, {
                  screen: ScreenName.SETTING_MUTE_ACCOUNT,
                });
              }}
            >
              <HStack
                space="6px"
                flexDirection="row"
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <CustomMaterialIcon
                    size={iconSize}
                    color={Color.TEXT}
                    name={IconName.MUTE}
                  />
                  <CustomText color={Color.TEXT} fontType={FontType.SMALL_BOLD}>
                    ミュート中のユーザー
                  </CustomText>
                </HStack>
                <Spacer />
                <CustomMaterialIcon
                  size={arrowSize}
                  color={Color.MEDIUM_GRAY}
                  name={IconName.ARROW_FORWARD}
                />
              </HStack>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.SETTING, {
                  screen: ScreenName.SETTING_MAIN,
                });
              }}
            >
              <HStack
                space="6px"
                flexDirection="row"
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <CustomMaterialIcon
                    size={iconSize}
                    color={Color.TEXT}
                    name={IconName.INFO}
                  />
                  <CustomText color={Color.TEXT} fontType={FontType.SMALL_BOLD}>
                    まなぶHUBについて
                  </CustomText>
                </HStack>
                <Spacer />
                <CustomMaterialIcon
                  size={arrowSize}
                  color={Color.MEDIUM_GRAY}
                  name={IconName.ARROW_FORWARD}
                />
              </HStack>
            </Pressable>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
