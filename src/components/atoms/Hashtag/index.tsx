import * as React from "react";
import { Pressable } from "native-base";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { CustomText } from "../Text";

export enum HashTagDisplayMode {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface HashtagProps {
  text: string;
  displayMode: HashTagDisplayMode;
  onPress: any;
}

const Hashtag: React.FC<HashtagProps> = ({ text, displayMode, onPress }) => {
  const backgroundColor =
    displayMode === HashTagDisplayMode.PRIMARY ? Color.MAIN : Color.WHITE_70;
  const textColor =
    displayMode === HashTagDisplayMode.PRIMARY ? Color.BASE : Color.MAIN;

  return (
    <Pressable
      onPress={onPress}
      paddingX="12px"
      paddingY="5px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="18px"
      backgroundColor={backgroundColor}
      shadow={1}
      marginTop="6px"
      marginRight="6px"
    >
      <CustomText color={textColor} fontType={FontType.SMALL}>
        {"#" + text}
      </CustomText>
    </Pressable>
  );
};

const memoizedHashtag = React.memo(Hashtag);
export { memoizedHashtag as Hashtag };
