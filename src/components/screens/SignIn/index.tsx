import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Spacer, Text, VStack, HStack, Pressable } from "native-base";
import * as React from "react";
import { Color } from "../../../constants/Color";
import { ScreenName } from "../../../constants/ScreenName";
import { CapsuleButton } from "../../atoms/CapsuleButton";
import { CapsuleInput } from "../../atoms/CapsuleInput";
import { useSignIn } from "./hooks";

interface SignInScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SignIn: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { email, password, setEmail, setPassword, handleSignin } = useSignIn();

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
        ログイン
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
        </VStack>
        <VStack alignItems="center" space="24px">
          <CapsuleButton text="ログイン" onPress={handleSignin} />
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
              navigation.navigate(ScreenName.SIGN_UP);
            }}
          >
            <Text
              fontFamily="body"
              color={Color.MAIN}
              underline
              fontWeight={500}
            >
              まだアカウントを持っていない方
            </Text>
          </Pressable>
        </VStack>
      </VStack>
      <Spacer />
    </Box>
  );
};
