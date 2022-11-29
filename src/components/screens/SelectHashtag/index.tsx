import * as React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Color } from "../../../constants/Color";
import { ScreenName } from "../../../constants/ScreenName";
import {
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
import { AlignedHashtags } from "../../molecules/AlignedHashtags";
import { useSelectedHashtag } from "./hooks";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { HashTagDisplayMode } from "../../atoms/Hashtag";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";
import { RouteProp } from "@react-navigation/native";
import { PostType } from "../../../domain/types/Post";

interface SelectHashtagScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}

// ハッシュタグ選択画面UI
export const SelectHashTag: React.FC<SelectHashtagScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    title,
    body,
    selectedTags,
    candidateTags,
    newTag,
    isSubmitting,
    choiceTag,
    addNewTag,
    deleteTag,
    setNewTag,
    handleCreatePost,
  } = useSelectedHashtag(navigation, route);

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
                navigation.navigate(ScreenName.NEW_POST, {
                  screen: ScreenName.WRITE_BODY,
                });
              }}
            >
              <CustomMaterialIcon
                name={IconName.ARROW_BACK}
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
              title={title}
              body={body}
              tags={selectedTags}
              onTagPress={deleteTag}
            />
            <Box mt="4px">
              <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
                おすすめのハッシュタグ：
              </CustomText>
            </Box>
            <AlignedHashtags
              tags={candidateTags}
              onTagPress={choiceTag}
              displayMode={HashTagDisplayMode.SECONDARY}
            />
            <Box
              borderWidth="1px"
              borderColor={Color.MEDIUM_GRAY}
              borderRadius="12px"
              shadow={1}
              mt="8px"
            >
              <Input
                placeholder="タグを入力"
                height="40px"
                width="100%"
                borderRadius="12px"
                backgroundColor={Color.WHITE_100}
                shadow="2"
                borderWidth="0"
                fontFamily="body"
                fontWeight={500}
                fontSize="xs"
                multiline={false}
                value={newTag}
                onChangeText={setNewTag}
                blurOnSubmit={true}
                onSubmitEditing={addNewTag}
              />
            </Box>
            <HStack justifyContent="flex-end" mt="16px">
              <VStack space="16px">
                <CapsuleButton
                  isLoading={isSubmitting}
                  text="きく"
                  onPress={() => {
                    handleCreatePost(PostType.ASK);
                  }}
                  rightIcon={
                    <CustomMaterialIcon
                      name={IconName.SEND}
                      size="20px"
                      color={Color.WHITE_100}
                    />
                  }
                />
                <CapsuleButton
                  isLoading={isSubmitting}
                  text="つたえる"
                  onPress={() => {
                    handleCreatePost(PostType.TELL);
                  }}
                  rightIcon={
                    <CustomMaterialIcon
                      name={IconName.SEND}
                      size="20px"
                      color={Color.WHITE_100}
                    />
                  }
                />
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
