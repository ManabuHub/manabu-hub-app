import * as React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Color } from "../../../constants/Color";
import { ScreenName } from "../../../constants/ScreenName";
import {
  Icon,
  Box,
  HStack,
  Pressable,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from "native-base";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { PostCard, PostCardType } from "../../organisms/PostCard";
import { MaterialIcons } from "@expo/vector-icons";
import { AlignedHashtags } from "../../molecules/AlignedHashtags";
import { useSelectedHashtag } from "./hooks";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { HashTagDisplayMode } from "../../atoms/Hashtag";

interface SelectHashtagScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

// ハッシュタグ選択画面UI
export const SelectHashTag: React.FC<SelectHashtagScreenProps> = ({
  navigation,
}) => {
  const {
    selectedTags,
    candidateTags,
    newTag,
    choiceTag,
    // addNewTag,
    deleteTag,
    setNewTag,
  } = useSelectedHashtag();

  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.WHITE_100}
    >
      <ScrollView bg={Color.WHITE_100} flex={1}>
        <VStack marginTop={`${insets.top}px`}>
          <HStack
            alignItems="center"
            space="32px"
            marginY="8px"
            marginLeft="16px"
          >
            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.WRITE_BODY);
              }}
            >
              <Icon
                as={<MaterialIcons name={"arrow-back"} />}
                size="28px"
                color={Color.MAIN}
              />
            </Pressable>
            <CustomText fontType={FontType.MAIN} color={Color.TEXT}>
              ハッシュタグを設定しよう
            </CustomText>
          </HStack>
          <VStack space="8px" paddingX="16px">
            <PostCard
              type={PostCardType.PREVIEW}
              authorName="ピヨ子"
              title="研究の仕方が全く分かりません！つらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？"
              body="研究マジでつらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？研究マジでつらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？"
              tags={selectedTags}
              onTagPress={deleteTag}
            />
            <AlignedHashtags
              tags={candidateTags}
              onTagPress={choiceTag}
              displayMode={HashTagDisplayMode.SECONDARY}
            />
            <Input
              placeholder="#を入力"
              height="40px"
              width="300px"
              borderRadius="5px"
              backgroundColor={Color.WHITE_100}
              borderWidth={2}
              shadow="2"
              fontFamily="body"
              fontWeight={700}
              placeholderTextColor={Color.MEDIUM_GRAY}
              fontSize="xs"
              value={newTag}
              onChangeText={setNewTag}
            />
            <HStack justifyContent="flex-end">
              <Box>
                <CapsuleButton text="きく" onPress={() => {}} />
                <CapsuleButton text="つたえる" onPress={() => {}} />
              </Box>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
