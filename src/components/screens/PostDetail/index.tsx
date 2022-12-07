import * as React from "react";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Post, PostType } from "../../../domain/types/Post";
import { CustomText } from "../../atoms/Text";
import {
  ArrowBackIcon,
  Box,
  Text,
  Input,
  TextArea,
  VStack,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  ThreeDotsIcon,
  Icon,
  Divider,
} from "native-base";
import { Color } from "../../../constants/Color";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontType } from "../../../constants/Font";

// コメントがどれくらい前のものか計算する関数
function calculateAgeOfComment(date: Date) {
  const currentTime = new Date();
  const yearDifference = currentTime.getFullYear() - date.getFullYear();
  if (yearDifference > 0) {
    return `${yearDifference}年前`;
  } else {
    const monthDifference = currentTime.getMonth() - date.getMonth();
    if (monthDifference > 0) {
      return `${monthDifference}ヶ月前`;
    } else {
      const dateDifference = currentTime.getDate() - date.getDate();
      if (dateDifference > 0) {
        return `${dateDifference}日前`;
      } else {
        const hourDifference = currentTime.getHours() - date.getHours();
        if (hourDifference > 0) {
          return `${hourDifference}時間前`;
        } else {
          const minuteDifference = currentTime.getMinutes() - date.getMinutes();
          if (minuteDifference > 0) {
            `${minuteDifference}分前`;
          } else {
            return "数秒前";
          }
        }
      }
    }
  }
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
    nGrams:[],
    createdAt: new Date(2021),
  });

  const insets = useSafeAreaInsets();

  useEffect(() => {
    //データを取ってくる関数 型注釈てきとーです
    const fetchData = async (): Promise<Post | any> => {};
  }, []);

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
          <HStack mt="5">
            <CustomText color={Color.TEXT} fontType={FontType.EXSMALL_BOLD}>
              {"ぴよ子"}
            </CustomText>
            <Box display="flex" flexDirection="row">
              <Text color={Color.TEXT}>
                {postData.createdAt.getHours() + "時間前"}
              </Text>
              <Icon
                as={<MaterialIcons name={"favorite-outline"} />}
                size={6}
                color={Color.MAIN}
                mt="3px"
                mr="4px"
              />
              <Text color={Color.TEXT}> {postData.likeCount}</Text>
              <Icon
                as={<MaterialIcons name={"chat-bubble-outline"} />}
                size={6}
                color={Color.MAIN}
                mt="3px"
                mr="4px"
              />
              <Text color={Color.TEXT}> {postData.commentCount}</Text>
              <Icon
                as={<MaterialIcons name={"turned-in-not"} />}
                size={6}
                color={Color.MAIN}
                mt="3px"
                mr="4px"
              />
              <Text color={Color.TEXT}> {postData.saveCount}</Text>
            </Box>
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
