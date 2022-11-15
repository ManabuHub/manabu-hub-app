import { ArrowBackIcon, Box, Input, TextArea } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import * as React from "react";
import { View } from "react-native";
import { ButtonColorScheme } from "../../../constants/ButtonColorScheme";
import { CapsuleButton } from "../../molecules/CapsuleButton";

interface WriteBodyScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}
// 投稿テキスト入力画面UI
export const WriteBody: React.FC<WriteBodyScreenProps> = ({ navigation }) => {
  return (
    <Box mt={10} mx={5}>
      <View style={{ flexDirection: "row" }}>
        <Box mr="auto" mt={2}>
          <ArrowBackIcon
            size={6}
            color="#3D71D4"
            onPress={() => {
              console.log("戻るボタンが押されました");
            }}
          />
          {/**IconButtonの実装方法が分からなかったため、見た目だけのアイコンを表示させた**/}
          {/** ButtonColorScheme.PRIMARY をcolorに適用させる方法が分からなかかったため、カラーコードを直に書き込んだ */}
        </Box>
        <Box mr={1} mb={2}>
          <CapsuleButton
            text="次へ"
            colorScheme={ButtonColorScheme.PRIMARY}
            onPress={() => {
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
      />
      <TextArea
        borderTopWidth={0}
        borderRadius={0}
        h={260}
        placeholder="ノートを書く"
        w="100%"
        fontSize="12px"
        style={{ fontWeight: "bold" }}
        autoCompleteType=""
      />
    </Box>
  );
};
