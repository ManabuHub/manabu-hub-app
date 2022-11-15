import { ArrowBackIcon, Box, Input, TextArea, IconButton } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import * as React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonColorScheme } from "../../../constants/ButtonColorScheme";
import { useState } from "react";
import { CapsuleButton } from "../../molecules/CapsuleButton";

interface WriteBodyScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const WriteBody: React.FC<WriteBodyScreenProps> = ({ navigation }) => {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");
  return (
    <Box mt={10} mx={5}>
      <View style={{ flexDirection: "row" }}>
        <Box mr="auto" mt={2}>
          <ArrowBackIcon size={6} color="#3D71D4" />
        </Box>
        <IconButton
          colorScheme="indigo"
          key={"ghost"}
          variant={"ghost"}
          _icon={{
            as: MaterialIcons,
            name: "arrowleft",
          }}
        />
        <Box mr={1} mb={2}>
          <CapsuleButton
            text="次へ"
            colorScheme={ButtonColorScheme.PRIMARY}
            onPress={() => {
              console.log(postTitle);
              console.log(postBody); //デバッグ用
              navigation.navigate(ScreenName.SELECT_HASHTAG);
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
        value={postTitle}
        onChangeText={setPostTitle}
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
        value={postBody}
        onChangeText={setPostBody} //https://docs.nativebase.io/textarea#page-title ここからはどうすれば左上始まりになるか読み取れなかった
      />
    </Box>
  );
};

//61行目、72行目
// any
// プロパティ 'value' は型 'number' に存在していません。'valueOf' ですか?ts(2551)
// lib.es5.d.ts(571, 5): 'valueOf' はここで宣言されています。
//ここのエラーの解決方法を教えてください
