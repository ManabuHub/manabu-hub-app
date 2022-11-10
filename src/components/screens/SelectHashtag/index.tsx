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
import { PostCard } from "../../organisms/PostCard";
import { MaterialIcons } from "@expo/vector-icons";
import { AlignedHashtags } from "../../molecules/AlignedHashtags";
import { useSelectedHashtag } from "./hooks";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";

interface SelectHashtagScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

// ハッシュタグ選択画面UI
export const SelectHashTag: React.FC<SelectHashtagScreenProps> = ({
  navigation,
}) => {
  const {
    written,
    selectedTags,
    notSelectedTags,
    setWritten,
    setSelectedTags,
    setNotSelectedTags,
  } = useSelectedHashtag();

  const insets = useSafeAreaInsets();

  const handleAddTag = () => {
    for (let i = 0; i < selectedTags.length; i++) {
      if (selectedTags[i].tagName === written) return;
    } //find関数的なものが分からなかったので、for文で既にあるタグかどうかの判定を逐一行ないました。
    if (written === "") return;
    setSelectedTags((prevSelectedTags) => {
      return [...prevSelectedTags, { tagName: written, isSelected: true }];
    });
    const newNotSelectedTags = [...notSelectedTags];
    const nST = newNotSelectedTags.filter(
      (notSelectedTags) => notSelectedTags.tagName !== written
    );
    setNotSelectedTags(nST);
    setWritten("");
  };

  const deleteSelectedTag = (tName: string) => {
    const newSelectedTags = [...selectedTags];
    const sT = newSelectedTags.filter(
      (selectedTags) => selectedTags.tagName !== tName
    );
    setSelectedTags(sT);
  };

  const choiceSelectedTag = (tName: string) => {
    const newNotSelectedTags = [...notSelectedTags];
    const nST = newNotSelectedTags.filter(
      (notSelectedTags) => notSelectedTags.tagName !== tName
    );
    setNotSelectedTags(nST);
    setSelectedTags((prevSelectedTags) => {
      return [...prevSelectedTags, { tagName: tName, isSelected: true }];
    });
  };

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
            marginTop="8px"
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
          <VStack padding="16px">
            <PostCard
              authorName="ピヨ子"
              title="研究の仕方が全く分かりません！つらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？"
              body="研究マジでつらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？研究マジでつらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？"
              tags={selectedTags}
              onTagPress={deleteSelectedTag}
            />
          </VStack>
          <Box maxW="80" display="flex" flexDirection="column">
            <AlignedHashtags
              tags={notSelectedTags}
              onPress={choiceSelectedTag}
              numOfRows={2}
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
              value={written}
              onChangeText={setWritten}
            />
          </Box>
          <HStack justifyContent="flex-end">
            <Box>
              <CapsuleButton text="きく" onPress={() => {}} />
              <CapsuleButton text="つたえる" onPress={() => {}} />
            </Box>
          </HStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
