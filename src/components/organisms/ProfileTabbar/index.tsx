import { Box, HStack, Pressable } from "native-base";
import * as React from "react";
import { Color } from "../../../constants/Color";
import { Dimensions } from "react-native";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";

export enum ProfileTab {
  PROFILE = "profile",
  POST = "post",
  THREAD = "thread",
  LIKE = "like",
  SAVE = "save",
}

export const ProfileTabColor = {
  [ProfileTab.PROFILE]: Color.BASE,
  [ProfileTab.POST]: Color.POST_YELLOW,
  [ProfileTab.THREAD]: Color.THREAD_PURPLE,
  [ProfileTab.LIKE]: Color.LIKE_PINK,
  [ProfileTab.SAVE]: Color.SAVE_GREEN,
};

const tabs = [
  ProfileTab.PROFILE,
  ProfileTab.POST,
  ProfileTab.THREAD,
  ProfileTab.LIKE,
  ProfileTab.SAVE,
];

const ProfileTabIcon = {
  [ProfileTab.PROFILE]: IconName.PROFILE,
  [ProfileTab.POST]: IconName.POST,
  [ProfileTab.THREAD]: IconName.THREAD,
  [ProfileTab.LIKE]: IconName.LIKE,
  [ProfileTab.SAVE]: IconName.SAVE,
};

const ProfileTabIconColor = {
  [ProfileTab.PROFILE]: Color.MAIN,
  [ProfileTab.POST]: Color.POST_YELLOW_SUB,
  [ProfileTab.THREAD]: Color.THREAD_PURPLE_SUB,
  [ProfileTab.LIKE]: Color.LIKE_PINK_SUB,
  [ProfileTab.SAVE]: Color.SAVE_GREEN_SUB,
};

const ProfileTabLabel = {
  [ProfileTab.PROFILE]: "プロフィール",
  [ProfileTab.POST]: "投稿",
  [ProfileTab.THREAD]: "コメント",
  [ProfileTab.LIKE]: "いいね",
  [ProfileTab.SAVE]: "保存",
};

interface ProfileTabbarProps {
  currentTab: ProfileTab;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onCurrentTabChange: (tab: ProfileTab) => void;
}

export const ProfileTabbar: React.FC<ProfileTabbarProps> = ({
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
          backgroundColor={ProfileTabColor[tab]}
          width={tab === currentTab ? currentTabWidth : 16}
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
              color={ProfileTabIconColor[tab]}
              name={ProfileTabIcon[tab]}
            />

            {currentTab === tab && (
              <Box>
                <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                  {ProfileTabLabel[tab]}
                </CustomText>
              </Box>
            )}
          </HStack>
        </Pressable>
      ))}
    </Box>
  );
};
