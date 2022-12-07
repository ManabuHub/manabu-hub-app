import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  KeyboardAvoidingView,
  ScrollView,
  VStack,
  HStack,
  Box,
  Radio,
} from "native-base";
import * as React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { IconName } from "../../../constants/IconName";
import { AccountType } from "../../../domain/types/User";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { CustomText } from "../../atoms/Text";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { useSelectAccountTypeScreen } from "./hooks";

export interface SelectAccountTypeScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SelectAccountTypeScreen: React.FC<
  SelectAccountTypeScreenProps
> = ({ navigation }) => {
  const { accountType, setAccountType, handleNext } =
    useSelectAccountTypeScreen(navigation);
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.BASE}
    >
      <ScrollView bg={Color.BASE} flex={1}>
        <VStack marginTop={`${insets.top}px`}>
          <HStack marginY="10px" position="relative">
            <HStack
              w="100%"
              alignItems="center"
              justifyContent="center"
              space="8px"
              zIndex={1}
            >
              <Box>
                <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                  プロフィール作成
                </CustomText>
              </Box>
              <CustomMaterialIcon
                name={IconName.EDIT}
                size="16px"
                color={Color.TEXT}
              />
            </HStack>
          </HStack>
          <CustomText
            fontType={FontType.SMALL}
            color={Color.TEXT}
            style={{
              width: 300,
              textAlign: "center",
              alignSelf: "center",
              marginTop: 100,
            }}
          >
            あなたは、高校生/浪人生ですか？または受験生のサポートに入っていただける大学生ですか？
          </CustomText>
          <Box marginLeft="50px" marginTop="80px">
            <Radio.Group
              name="myRadioGroup"
              value={accountType}
              onChange={(type) => {
                setAccountType(type as any);
              }}
            >
              <Radio value={AccountType.MENTEE}>
                <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
                  高校生/浪人生/中学生以下
                </CustomText>
              </Radio>
              <Radio value={AccountType.MENTOR} my="12px">
                <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
                  大学生
                </CustomText>
              </Radio>
            </Radio.Group>
          </Box>
          <Box alignSelf="center" marginTop="80px">
            <CapsuleButton text="次へ" onPress={handleNext} />
          </Box>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
