import * as React from "react";
import { Pressable } from "native-base";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { IconName } from "../../../constants/IconName";
import { CustomText } from "../Text";

interface HashtagProps {
  text: string;
  fontType?: FontType;
  icon?: IconName;
  iconSize?: number;
  isDisabled?: boolean;
  isSelected?: boolean;
  onPress: any;
}

const Hashtag: React.FC<HashtagProps> = ({
  text,
  isDisabled = false,
  isSelected,
  onPress,
}) => {
  const backgroundColor = isSelected ? Color.MAIN : Color.WHITE_70;
  const textColor = isSelected ? Color.BASE : Color.MAIN;

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
      disabled={isDisabled}
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
