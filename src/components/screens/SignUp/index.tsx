import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Spacer, Text, VStack, HStack, Pressable } from "native-base";
import * as React from "react";
import { useState } from "react";
import { Color } from "../../../constants/Color";
import { ScreenName } from "../../../constants/ScreenName";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { CapsuleInput } from "../../molecules/CapsuleInput";
import { useSignUp } from "./hooks";

export interface SignUpScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const {
    email,
    password,
    rePassword,
    setEmail,
    setPassword,
    setRePassword,
    handleSignup,
  } = useSignUp();

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
      <VStack display="flex" alignItems="center" space="36px">
        <VStack space="24px">
          <CapsuleInput
            value={email}
            iconName="mail"
            label="メールアドレス"
            placeholder="manabu@example.com"
            onChange={setEmail}
          />

          <CapsuleInput
            value={password}
            iconName="lock"
            label="パスワード"
            placeholder="xxxxxxxx"
            onChange={setPassword}
          />

          <VStack width="300px">
            <CapsuleInput
              value={rePassword}
              iconName="lock"
              label="パスワード(再入力)"
              placeholder="xxxxxxxx"
              onChange={setRePassword}
            />
            <Text fontFamily="body" fontSize="xs" marginTop="6px">
              ・半角英数字8文字以上
            </Text>
            <Text fontFamily="body" fontSize="xs">
              ・大文字、小文字、数字のうち少なくとも2種類が混在している必要があります。
            </Text>
          </VStack>
        </VStack>
        <VStack alignItems="center" space="24px">
          <CapsuleButton
            text="登録"
            onPress={() => {
              handleSignup;
            }}
          />
          <HStack alignItems="center" space="12px">
            <Box
              width="24px"
              height="3px"
              borderBottomColor={Color.TEXT}
              borderBottomWidth="1px"
            />
            <Text fontFamily="body" color={Color.TEXT}>
              or
            </Text>
            <Box
              width="24px"
              height="3px"
              borderBottomColor={Color.TEXT}
              borderBottomWidth="1px"
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
    </Box>
  );
};
