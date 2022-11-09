import * as React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Color } from "../../../constants/Color";
import { ScreenName } from "../../../constants/ScreenName";
import { Box, Spacer, Text, Pressable } from "native-base";
import { PostPreview } from "../../organisms/PostPreview";

interface SelectHashtagScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

// ハッシュタグ選択画面UI
export const SelectHashTag: React.FC<SelectHashtagScreenProps> = ({
  navigation,
}) => {
  // const { email, password, setEmail, setPassword, handleSignin } = useSelectHashtag();

  return (
    <Box
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      bg={Color.BASE}
      safeArea
    >
      <Box>
        <Pressable
          onPress={() => {
            navigation.navigate(ScreenName.WRITE_BODY);
          }}
        >
          <Text fontFamily="body" color={Color.MAIN} fontWeight={500}>
            戻る
          </Text>
        </Pressable>
        <Text
          fontSize="2xl"
          fontFamily="body"
          fontWeight={400}
          color={Color.MAIN}
          marginTop={0}
          marginBottom={6}
        >
          ハッシュタグを設定しよう
        </Text>
      </Box>
      <PostPreview
        accountName="ピヨ子"
        postTitle="研究の仕方が分かりません！"
        text="研究マジでつらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？"
      />
      <Spacer />
    </Box>
  );
};
