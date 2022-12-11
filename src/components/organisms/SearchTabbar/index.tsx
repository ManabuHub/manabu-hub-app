import { Box, HStack, Pressable } from "native-base";
import * as React from "react";
import { Color } from "../../../constants/Color";
import { Dimensions } from "react-native";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";

export enum SearchTab {
  HASH = "hashtag",
  KEYWORD = "keyword",
  ACCOUNT = "account",
}

const tabs = [SearchTab.HASH, SearchTab.KEYWORD, SearchTab.ACCOUNT];

const SearchTabIcon = {
  [SearchTab.HASH]: IconName.TAG,
  [SearchTab.KEYWORD]: IconName.MENU,
  [SearchTab.ACCOUNT]: IconName.PERSON,
};

interface SearchTabbarProps {
  currentTab: SearchTab;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onCurrentTabChange: (tab: SearchTab) => void;
}

export const SearchTabbar: React.FC<SearchTabbarProps> = ({
  currentTab,
  onCurrentTabChange,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const currentTabWidth = screenWidth - 64 * 4;
  return (
    <Box display="flex" flexDirection="row" height={12}>
      {tabs.map((tab) => (
        <Pressable
          height={12}
          // color={tab === currentTab ? Color.SUB : Color.WHITE_100}
          backgroundColor={tab === currentTab ? Color.SUB : Color.WHITE_100}
          width={currentTabWidth}
          shadow="1"
          borderTopRadius="12px"
          onPress={() => {
            onCurrentTabChange(tab);
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          key={tab}
        >
          <HStack alignItems="center" space="4px">
            <CustomMaterialIcon
              size="24px"
              color={Color.BLACK_30}
              name={SearchTabIcon[tab]}
            />
          </HStack>
        </Pressable>
      ))}
    </Box>
  );
};
