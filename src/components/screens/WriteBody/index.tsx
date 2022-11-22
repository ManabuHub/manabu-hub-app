import {
  Box,
  Input,
  VStack,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  HStack,
} from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import * as React from "react";
import { Platform } from "react-native";
import { ButtonColorScheme } from "../../../constants/ButtonColorScheme";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { Color } from "../../../constants/Color";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LineHeight, useWriteBody } from "./hooks";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";
import DashedLine from "react-native-dashed-line";

interface WriteBodyScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const WriteBody: React.FC<WriteBodyScreenProps> = ({ navigation }) => {
  const {
    title,
    body,
    displayNumberOfLines,
    setTitle,
    setBody,
    onBodyHeightChange,
  } = useWriteBody();
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.WHITE_100}
    >
      <ScrollView bg={Color.WHITE_100} flex={1}>
        <VStack mx="20px" marginTop={`${insets.top}px`}>
          <HStack alignItems="center" justifyContent="space-between" mb="4px">
            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.MAIN);
              }}
            >
              <CustomMaterialIcon
                name={IconName.ARROW_BACK}
                size="28px"
                color={Color.MAIN}
              />
            </Pressable>
            <Box mr={1}>
              <CapsuleButton
                text="次へ"
                colorScheme={ButtonColorScheme.PRIMARY}
                onPress={() => {
                  navigation.navigate(ScreenName.NEW_POST, {
                    screen: ScreenName.SELECT_HASHTAG,
                  });
                }}
              />
            </Box>
          </HStack>
          <Input
            backgroundColor={Color.WHITE_100}
            borderTopColor={Color.MAIN}
            borderBottomColor={Color.MAIN}
            borderWidth={1}
            borderLeftWidth={0}
            borderRightWidth={0}
            padding={0}
            placeholder="タイトル"
            w="100%"
            height="50px"
            fontFamily="body"
            fontWeight="bold"
            fontSize="16px"
            value={title}
            onChangeText={setTitle}
          />
          <Box position="relative">
            <Input
              onContentSizeChange={onBodyHeightChange}
              padding="0"
              multiline={true}
              backgroundColor={Color.WHITE_100}
              borderWidth={0}
              placeholder="ノートを書く"
              w="100%"
              fontFamily="body"
              fontSize="14px"
              lineHeight={`${LineHeight}px`}
              height={`${displayNumberOfLines * LineHeight}px`}
              value={body}
              onChangeText={setBody} //https://docs.nativebase.io/textarea#page-title ここからはどうすれば左上始まりになるか読み取れなかった
            />
            {body.length === 0 && (
              <Box position="absolute" top="9px" left="80px" opacity={30}>
                <CustomMaterialIcon name={IconName.EDIT} size="16px" />
              </Box>
            )}

            {[...Array(displayNumberOfLines).keys()].map((num) => (
              <Box
                position="absolute"
                top={`${LineHeight * (num + 1)}px`}
                width="100%"
                key={num}
              >
                <DashedLine
                  dashLength={2}
                  dashThickness={1}
                  dashColor={Color.DASH}
                />
              </Box>
            ))}
          </Box>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
