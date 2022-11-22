import {
  ArrowBackIcon,
  Box,
  Input,
  TextArea,
  VStack,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import * as React from "react";
import { Platform, View } from "react-native";
import { ButtonColorScheme } from "../../../constants/ButtonColorScheme";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { Color } from "../../../constants/Color";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useWriteBody } from "./hooks";

interface WriteBodyScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const WriteBody: React.FC<WriteBodyScreenProps> = ({ navigation }) => {
  const { title, body, setTitle, setBody } = useWriteBody();
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.WHITE_100}
    >
      <ScrollView bg={Color.WHITE_100} flex={1}>
        <VStack mx={5} marginTop={`${insets.top}px`}>
          <View style={{ flexDirection: "row" }}>
            <Box mr="auto" mt={2}>
              <ArrowBackIcon size={6} color="#3D71D4" />
            </Box>
            <Box mr={1} mb={2}>
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
          </View>
          <Input
            borderRightWidth={0}
            borderLeftWidth={0}
            borderTopColor="#3D71D4"
            borderBottomColor="#3D71D4"
            borderWidth={1}
            placeholder="タイトル"
            w="100%"
            h="13%"
            fontSize="18px"
            style={{ fontWeight: "bold" }}
            value={title}
            onChangeText={setTitle}
          />
          <TextArea
            autoCompleteType="off"
            borderTopWidth={0}
            borderRadius={0}
            h={260}
            placeholder="ノートを書く"
            w="100%"
            fontSize="12px"
            style={{ fontWeight: "bold" }}
            value={body}
            onChangeText={setBody} //https://docs.nativebase.io/textarea#page-title ここからはどうすれば左上始まりになるか読み取れなかった
          />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
