import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Spacer,
  Text,
  VStack,
  HStack,
  Pressable,
  Divider,
  Checkbox,
  ScrollView,
  KeyboardAvoidingView,
} from "native-base";
import * as React from "react";
import { Platform, View } from "react-native";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { ScreenName } from "../../../constants/ScreenName";
import { CustomText, LinkSpan } from "../../atoms/Text";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { CapsuleInput } from "../../molecules/CapsuleInput";
import { useSignUp } from "./hooks";
import { IconName } from "../../../constants/IconName";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";

export interface SignUpScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const {
    email,
    password,
    isPasswordLengthEnough,
    isPasswordValid,
    rePassword,
    isConsent,
    isFilled,
    isSubmitting,
    setEmail,
    onPasswordChange,
    setRePassword,
    setIsConsent,
    handleSignup,
  } = useSignUp();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.BASE}
    >
      <ScrollView bg={Color.BASE}>
        <VStack
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          bg={Color.BASE}
          safeArea
        >
          <Text
            fontSize="3xl"
            fontFamily="body"
            fontWeight={700}
            color={Color.MAIN}
            marginTop={6}
            marginBottom={6}
          >
            新規登録
          </Text>
          <VStack display="flex" alignItems="center" space={6} width="100%">
            <VStack space={6} paddingX={10} width="100%">
              <CapsuleInput
                value={email}
                iconName={IconName.EMAIL}
                label="メールアドレス"
                placeholder="manabu@example.com"
                onChange={setEmail}
              />

              <VStack space={1}>
                <CapsuleInput
                  value={password}
                  iconName={IconName.LOCK}
                  label="パスワード"
                  placeholder="xxxxxxxx"
                  onChange={onPasswordChange}
                />
                <View>
                  <HStack alignItems="flex-start" space="4px">
                    <CustomMaterialIcon
                      name={
                        isPasswordLengthEnough ? IconName.CHECK : IconName.CLOSE
                      }
                      color={
                        isPasswordLengthEnough ? Color.MAIN : Color.INVALID
                      }
                      size="16px"
                    />
                    <CustomText color={Color.TEXT} fontType={FontType.EXSMALL}>
                      半角英数字8文字以上
                    </CustomText>
                  </HStack>
                  <HStack alignItems="flex-start" space="4px">
                    <CustomMaterialIcon
                      name={isPasswordValid ? IconName.CHECK : IconName.CLOSE}
                      color={isPasswordValid ? Color.MAIN : Color.INVALID}
                      size="16px"
                    />
                    <CustomText color={Color.TEXT} fontType={FontType.EXSMALL}>
                      大文字、小文字、数字のうち少なくとも2種類が混在している必要があります。
                    </CustomText>
                  </HStack>
                </View>
              </VStack>

              <CapsuleInput
                value={rePassword}
                iconName={IconName.LOCK}
                label="パスワード(再入力)"
                placeholder="xxxxxxxx"
                onChange={setRePassword}
              />

              <HStack alignItems="center" space={2} width="100%">
                <Checkbox
                  isChecked={isConsent}
                  colorScheme="blue"
                  value={""}
                  onChange={setIsConsent}
                  accessibilityLabel="consent"
                />

                <CustomText color={Color.TEXT} fontType={FontType.EXSMALL}>
                  <LinkSpan url={"https://apple.com"}>利用規約</LinkSpan>、
                  <LinkSpan url={"https://apple.com"}>
                    プライバシーボリシー
                  </LinkSpan>
                  を読み、同意しました。
                </CustomText>
              </HStack>
            </VStack>
            <VStack alignItems="center" space="24px">
              <CapsuleButton
                text="登録"
                onPress={handleSignup}
                disabled={!isFilled}
                isLoading={isSubmitting}
              />
              <HStack alignItems="center" space="12px">
                <Divider
                  width="6"
                  height="0"
                  borderBottomColor={Color.TEXT}
                  borderBottomWidth="1"
                />
                <Text fontFamily="body" color={Color.TEXT}>
                  or
                </Text>
                <Divider
                  width="6"
                  height="0"
                  borderBottomColor={Color.TEXT}
                  borderBottomWidth="1"
                />
              </HStack>
              <Pressable
                onPress={() => {
                  navigation.navigate(ScreenName.SIGN_IN);
                }}
              >
                <Text
                  fontFamily="body"
                  color={Color.MAIN}
                  underline
                  fontWeight={500}
                >
                  既にアカウントを持っている方
                </Text>
              </Pressable>
            </VStack>
          </VStack>
          <Spacer />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
