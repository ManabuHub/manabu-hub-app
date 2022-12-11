import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  HStack,
  KeyboardAvoidingView,
  Pressable,
  Box,
  Input,
  ScrollView,
  VStack,
} from "native-base";
import * as React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { Color } from "../../../constants/Color";
import { IconName } from "../../../constants/IconName";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { PostCard, PostCardType } from "../../organisms/PostCard";
import { AlignedHashtags } from "../../molecules/AlignedHashtags";
import { HashTagDisplayMode } from "../../atoms/Hashtag";
import { SearchTabbar, SearchTab } from "../../organisms/SearchTabbar";
import { useSearch } from "./hooks";
// import { useSearchScreen } from "./hooks";

export enum DisplayMode {
  RANK = "ranking",
  HASH = "hashtag",
  RESULT = "result",
}
export interface SearchScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState<SearchTab>(SearchTab.HASH);
  const insets = useSafeAreaInsets();
  const getMainPane = () => {
    switch (currentTab) {
      case SearchTab.HASH:
        return <></>;
      case SearchTab.KEYWORD:
        return (
          <VStack mx="15px" mt="10px" space="5px">
            <PostCard
              type={PostCardType.SAVE}
              authorName="ぴよ"
              postTime={100}
              likeNum={10000}
              commentNum={100}
              saveNum={0}
              title="hoge"
              body="hogehoge"
              tags={["きく"]}
              onTagPress={() => {}}
            />
            <PostCard
              type={PostCardType.SAVE}
              authorName="ぴよ"
              postTime={100}
              likeNum={10000}
              commentNum={100}
              saveNum={0}
              title="hoge"
              body="hogehoge"
              tags={["きく"]}
              onTagPress={() => {}}
            />
            <PostCard
              type={PostCardType.SAVE}
              authorName="ぴよ"
              postTime={100}
              likeNum={10000}
              commentNum={100}
              saveNum={0}
              title="hoge"
              body="hogehoge"
              tags={["きく"]}
              onTagPress={() => {}}
            />
          </VStack>
        );
      case SearchTab.ACCOUNT:
        return <></>;
    }
  };
  const {
    displayMode,
    setDisplayMode,
    searchWord,
    setSearchWord,
    search,
    unFocus,
    gotoRank,
  } = useSearch();
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.BASE}
    >
      <ScrollView bg={Color.BASE} flex={1}>
        <VStack marginTop={`${insets.top}px`}>
          <HStack mt="8px" mx="24px" alignItems="center" space="8px">
            {!(displayMode == DisplayMode.RANK) && (
              <Pressable position="relative" onPress={gotoRank}>
                <CustomMaterialIcon
                  size="28px"
                  color={Color.MAIN}
                  name={IconName.ARROW_BACK}
                />
              </Pressable>
            )}
            <Box
              flex={1}
              borderWidth="1px"
              borderColor={Color.MEDIUM_GRAY}
              borderRadius="12px"
              shadow={1}
            >
              <Input
                placeholder={
                  searchWord == ""
                    ? "ハッシュタグ、ユーザー、キーワード検索"
                    : searchWord
                }
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
                onFocus={() => setDisplayMode(DisplayMode.HASH)}
                onSubmitEditing={() => search()}
                onBlur={() => unFocus()}
                value={searchWord}
                onChangeText={setSearchWord}
                InputLeftElement={
                  <Box ml="10px">
                    <CustomMaterialIcon
                      name={IconName.SEARCH}
                      size="24px"
                      color={Color.MEDIUM_GRAY}
                    />
                  </Box>
                }
              />
            </Box>
          </HStack>
          {displayMode == DisplayMode.RANK && (
            <VStack mx="15px" mt="10px" space="5px">
              <PostCard
                type={PostCardType.SAVE}
                authorName="ぴよ"
                postTime={100}
                likeNum={10000}
                commentNum={100}
                saveNum={0}
                title="hoge"
                body="hogehoge"
                tags={["きく"]}
                onTagPress={() => {}}
              />
              <PostCard
                type={PostCardType.SAVE}
                authorName="ぴよ"
                postTime={100}
                likeNum={10000}
                commentNum={100}
                saveNum={0}
                title="hoge"
                body="hogehoge"
                tags={["きく"]}
                onTagPress={() => {}}
              />
              <PostCard
                type={PostCardType.SAVE}
                authorName="ぴよ"
                postTime={100}
                likeNum={10000}
                commentNum={100}
                saveNum={0}
                title="hoge"
                body="hogehoge"
                tags={["きく"]}
                onTagPress={() => {}}
              />
            </VStack>
          )}
          {displayMode == DisplayMode.HASH && (
            <Box mx="15px" mt="10px">
              <AlignedHashtags
                tags={[
                  "東大",
                  "工学系研究科",
                  "物理工学専攻",
                  "physics",
                  "Nature",
                  "Nature Physics",
                ]}
                displayMode={HashTagDisplayMode.SECONDARY}
                onTagPress={() => {}}
              />
            </Box>
          )}
          {displayMode == DisplayMode.RESULT && (
            <VStack mt="10px">
              <SearchTabbar
                currentTab={currentTab}
                onCurrentTabChange={setCurrentTab}
              />
              {getMainPane()}
            </VStack>
          )}
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
