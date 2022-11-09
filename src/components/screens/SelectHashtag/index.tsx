import * as React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Color } from "../../../constants/Color";
import { ScreenName } from "../../../constants/ScreenName";
import { Icon, Box, Text, VStack, HStack, Pressable, Input } from "native-base";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { PostPreview } from "../../organisms/PostPreview";
import { MaterialIcons } from "@expo/vector-icons";
import { AlignedHashtag } from "../../molecules/AlignedHashtag";
import { useSelectedHashtag } from "./hooks";

interface SelectHashtagScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

// ハッシュタグ選択画面UI
export const SelectHashTag: React.FC<SelectHashtagScreenProps> = ({
  navigation,
}) => {
  const {
    written,
    setWritten,
    selectedTags,
    setSelectedTags,
    notSelectedTags,
    setNotSelectedTags,
  } = useSelectedHashtag();

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
    <Box
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        maxW="96"
        padding="10"
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        bg={Color.WHITE_100}
        safeArea
      >
        <VStack display="flex" alignItems="start">
          <HStack>
            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.WRITE_BODY);
              }}
            >
              <Icon
                as={<MaterialIcons name={"lock" as any} />}
                size={5}
                ml="2"
                color={Color.MEDIUM_GRAY}
                marginLeft="5"
              />
            </Pressable>
            <Text
              fontSize="2xl"
              fontFamily="body"
              fontWeight={400}
              marginTop={0}
              marginBottom={6}
            >
              ハッシュタグを設定しよう
            </Text>
          </HStack>
          <PostPreview
            authorId="ピヨ子"
            title="研究の仕方が全く分かりません！つらいです。右も左も分からない人に研究計画書書かせるとかありえなくな"
            body="研究マジでつらいです。右も左も分からない人に研究計画書書かせるとかありえなくないですか？"
            tags={selectedTags}
            deleteTag={deleteSelectedTag}
          />

          <Box maxW="80" display="flex" flexDirection="column">
            <AlignedHashtag
              tags={notSelectedTags}
              onPress={() => {}}
              deleteTag={choiceSelectedTag}
              tagsHeight={10}
              numOfRows={2}
            />
            {/* <CapsuleInput
          value={written}
          iconName=""
          label=""
          placeholder="#を入力"
          onChange={setWritten}
        /> */}
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
            <button onClick={handleAddTag}>add hashtag</button>
          </Box>
          <HStack justifyContent={"right"}>
            <Box>
              <CapsuleButton text="きく" onPress={() => {}} />
              <CapsuleButton text="つたえる" onPress={() => {}} />
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
