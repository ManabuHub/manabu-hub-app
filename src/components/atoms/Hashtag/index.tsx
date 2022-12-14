import * as React from "react";
import { Pressable } from "native-base";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { CustomText } from "../Text";

export enum HashTagDisplayMode {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TLNORMAL = "normal",
  TLSPECIAL = "special",
}

interface HashtagProps {
  text: string;
  displayMode: HashTagDisplayMode;
  onPress: any;
}

const Hashtag: React.FC<HashtagProps> = ({ text, displayMode, onPress }) => {
  const style = {
    [HashTagDisplayMode.PRIMARY]: {
      backgroundColor: Color.MAIN,
      textColor: Color.BASE,
      radiusSize: "18px",
      shadowSize: 1,
    },
    [HashTagDisplayMode.SECONDARY]: {
      backgroundColor: Color.WHITE_70,
      textColor: Color.MAIN,
      radiusSize: "18px",
      shadowSize: 1,
    },
    [HashTagDisplayMode.TLNORMAL]: {
      backgroundColor: Color.WHITE_100,
      textColor: Color.THREAD_PURPLE_SUB,
      radiusSize: "9px",
      shadowSize: "none",
    },
    [HashTagDisplayMode.TLSPECIAL]: {
      backgroundColor: Color.THREAD_PURPLE_SUB,
      textColor: Color.WHITE_100,
      radiusSize: "9px",
      shadowSize: "none",
    },
  };

  return (
    <Pressable
      onPress={onPress}
      paddingX="13px"
      paddingY="7px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={style[displayMode].radiusSize}
      backgroundColor={style[displayMode].backgroundColor}
      marginTop="6px"
      marginRight="6px"
      borderWidth={displayMode === HashTagDisplayMode.SECONDARY ? "1px" : "0px"}
      borderColor={Color.MEDIUM_GRAY}
    >
      <CustomText
        color={style[displayMode].textColor}
        fontType={FontType.SMALL}
      >
        {"#" + text}
      </CustomText>
    </Pressable>
  );
};

const memoizedHashtag = React.memo(Hashtag);
export { memoizedHashtag as Hashtag };
