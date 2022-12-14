import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  VStack,
  HStack,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import * as React from "react";
import { useState } from "react";
import { Platform } from "react-native";
import { Color } from "../../../constants/Color";
import { IconName } from "../../../constants/IconName";
import { ScreenName } from "../../../constants/ScreenName";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { Radio } from "native-base";

interface SettingAccountProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SettingAccount: React.FC<SettingAccountProps> = ({
  navigation,
}) => {
  const [value, setValue] = useState("mentee");
  const sideMargin = "30px";
  const iconSize = "35px";
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
                  navigation.navigate(ScreenName.SETTING, {
                    screen: ScreenName.SETTING_MAIN,
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
                <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                  ?????????????????????
                </CustomText>
              </Box>
            </HStack>
          </HStack>
          <VStack space="15px" mx={sideMargin}>
            <VStack
            // space="6px"
            // justifyContent="space-between"
            >
              <HStack alignItems="center">
                <CustomMaterialIcon
                  size={iconSize}
                  color={Color.TEXT}
                  name={IconName.PERSON}
                />
                <CustomText color={Color.TEXT} fontType={FontType.SMALL_BOLD}>
                  ???????????????????????????
                </CustomText>
              </HStack>
              <Radio.Group
                position="relative"
                left="12%"
                name="myRadioGroup"
                value={value}
                color={Color.BLACK_30}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio value="mentee" my="1">
                  <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                    ?????????/?????????
                  </CustomText>
                </Radio>
                <Radio value="mentor" my="1">
                  <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                    ?????????
                  </CustomText>
                </Radio>
              </Radio.Group>
            </VStack>

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
                    name={IconName.LOGOUT}
                  />
                  <CustomText color={Color.TEXT} fontType={FontType.SMALL_BOLD}>
                    ???????????????
                  </CustomText>
                </HStack>
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
                    name={IconName.DELETE}
                  />
                  <CustomText color={Color.TEXT} fontType={FontType.SMALL_BOLD}>
                    ??????????????????????????????
                  </CustomText>
                </HStack>
              </HStack>
            </Pressable>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
