import * as React from "react";
import { useState, useEffect } from "react";
import { Post, PostType } from "../../../domain/types/Post";
import { CustomText } from "../../atoms/Text";
import {
  ArrowBackIcon,
  Box,
  Text,
  VStack,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  ThreeDotsIcon,
  Divider,
} from "native-base";
import { Color } from "../../../constants/Color";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontType } from "../../../constants/Font";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";

// ミリセカンド換算
const oneMinute = 60000;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const oneMonth = oneDay * 31;
const oneYear = oneDay * 365;

// コメントがどれくらい前のものか計算する関数
function calculateAgeOfComment(date: Date) {
  const currentTime = new Date();
  const difference = currentTime.getTime() - date.getTime();
  if (difference < oneMinute) {
    return "たった今";
  } else if (difference >= oneMinute && difference < oneHour) {
    return `${Math.floor(difference / oneMinute)}分前`;
  } else if (difference >= oneHour && difference < oneDay) {
    return `${Math.floor(difference / oneHour)}時間前`;
  } else if (difference >= oneDay && difference < oneMonth) {
    return `${Math.floor(difference / oneDay)}日前`;
  } else if (difference >= oneMonth && difference < oneYear) {
    return `${Math.floor(difference / oneMonth)}ヶ月前`;
  } else return `${Math.floor(difference / oneYear)}年前`;
}

export const PostDetailScreen: React.FC = () => {
  const [postData, setPostData] = useState<Post>({
    type: PostType.ASK,
    authorId: "",
    title: "東大文系赤本17ページの第三問意見交換",
    body: "東大文科赤本の17ページ第三問の筆者の意見を述べよの答えが納得行かないのですが、みなさんはどのように回答しましたか？私的には筆者は主人公の死を嘆いている様にしか感じられないのですが、、赤本には逆のことが書いてありますよね。その部分の解説のお願いします。",
    likeCount: 0,
    saveCount: 0,
    commentCount: 0,
    tags: [],
    nGrams: [],
    createdAt: new Date(2021, 5, 0),
  });

  const insets = useSafeAreaInsets();
  const actionButtonSize = "24px";

  useEffect(() => {
    //データを取ってくる関数 型注釈てきとーです
    const fetchData = async (): Promise<Post | any> => {};
  }, []);

  const dummyIcon = (
    <Box
      height="32px"
      width="32px"
      borderRadius="16px"
      backgroundColor={Color.MEDIUM_GRAY}
    />
  );

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.WHITE_100}
    >
      <ScrollView>
        <VStack mx={5} marginTop={`${insets.top}`}>
          <View style={{ flexDirection: "row" }}>
            <Box mr="auto" mt={2}>
              <ArrowBackIcon size={6} color="#3D71D4" />
            </Box>
            <Box ml="auto" mt={2}>
              <ThreeDotsIcon />
            </Box>
          </View>
          <HStack mt="5" alignItems="center" height="36px" mb="8px">
            <HStack alignItems="center" space="8px">
              {dummyIcon}
              <Box>
                <CustomText color={Color.TEXT} fontType={FontType.EXSMALL_BOLD}>
                  {"ぴよ子"}
                </CustomText>
              </Box>
            </HStack>
            <HStack ml="auto">
              <Text color={Color.TEXT}>
                {calculateAgeOfComment(postData.createdAt)}
              </Text>
              <CustomMaterialIcon
                name={IconName.LIKE}
                size={actionButtonSize}
                color={Color.MAIN}
              />
              <Text color={Color.TEXT}> {postData.likeCount}</Text>
              <CustomMaterialIcon
                name={IconName.CHAT}
                size={actionButtonSize}
                color={Color.MAIN}
              />
              <Text color={Color.TEXT}> {postData.commentCount}</Text>
              <CustomMaterialIcon
                name={IconName.SAVE}
                size={actionButtonSize}
                color={Color.MAIN}
              />
              <Text color={Color.TEXT}> {postData.saveCount}</Text>
            </HStack>
          </HStack>
          <Divider
            width="100%"
            height="0"
            borderBottomColor={Color.MAIN}
            borderBottomWidth="1"
          />
          <Box marginY="8px" alignItems="center">
            <CustomText color={Color.TEXT} fontType={FontType.MAIN_BOLD}>
              {postData.title}
            </CustomText>
          </Box>
          <Divider
            width="100%"
            height="0"
            borderBottomColor={Color.MAIN}
            borderBottomWidth="1"
          />
          <Box marginBottom="12px">
            <CustomText color={Color.TEXT} fontType={FontType.SMALL} underline>
              {postData.body}
            </CustomText>
          </Box>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
