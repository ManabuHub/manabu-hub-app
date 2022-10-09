import { ArrowBackIcon, Box, Input, TextArea } from "native-base";
import * as React from "react";
import { View } from "react-native";
import { ButtonColorScheme } from "../../../constants/ButtonColorScheme";
import { CapsuleButton } from "../../atoms/CapsuleButton";

// 投稿テキスト入力画面UI
export const WriteBody: React.FC = () => {
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
          {/**IconButtonの実装方法が分からなかったため、見た目だけのアイコンを表示させた}
          {/** ButtonColorScheme.PRIMARY をcolorに適用させる方法が分からなかかったため、カラーコードを直に書き込んだ */}
        </Box>
        <Box mr={1} mb={2}>
          <CapsuleButton
            text="次へ"
            colorScheme={ButtonColorScheme.PRIMARY}
            onPress={() => {}}
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
        style={{ fontWeight: "bold", fontSize: "18px" }}
      />
      <TextArea
        borderTopWidth={0}
        borderRadius={0}
        h={260}
        placeholder="ノートを書く"
        w="100%"
        style={{ fontWeight: "bold", fontSize: "12px" }}
      />
    </Box>
  );
};

//34行目 styleの型のエラー
// 型 '{ fontWeight: "bold"; fontSize: string; }' を型 'StyleProp<TextStyle>' に割り当てることはできません。
//   プロパティ 'fontSize' の型に互換性がありません。
//     型 'string' を型 'number' に割り当てることはできません。ts(2322)
// index.d.ts(1682, 5): 予期された型は、型 'IntrinsicAttributes & InterfaceInputProps & Partial<{}> & Partial<Record<string, any>>' に対してここで宣言されたプロパティ 'style' から取得されています
