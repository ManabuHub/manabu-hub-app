import { Box, Pressable } from "native-base";
import * as React from "react";
import { Color } from "../../../constants/Color";
import { Dimensions } from "react-native";

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

interface ProfileHeaderProps {
  currentTab: ProfileTab;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onCurrentTabChange: (tab: ProfileTab) => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
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
        ></Pressable>
      ))}
    </Box>
  );
};
