import * as React from "react";
import { Pressable, Text } from "native-base";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { IconName } from "../../../constants/IconName";

interface HashtagProps {
    text: string;
    fontType?: FontType;
    icon?: IconName;
    iconSize?: number;
    isDisabled?: boolean;
    isSelected?: boolean;
    onPress: any;
    tagsHeight: number;
}

const Hashtag: React.FC<HashtagProps> = ({
    text,
    isDisabled = false,
    isSelected,
    onPress,
    tagsHeight,
}) => {
    let tagColor = Color.WHITE_70
    let tagFontColor = Color.MAIN
    // let tagFont=
    if (isSelected === true) {
        tagColor = Color.MAIN
        tagFontColor = Color.BASE
    }
    return (
        <Pressable
            onPress={onPress}
            //   width={54}
            height={tagsHeight}
            margin="5px"
            padding={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={22}
            //   borderWidth={1}
            //   borderColor={ButtonStyles[colorScheme].borderColor}
            backgroundColor={tagColor}
            shadow={3}
            disabled={isDisabled}
        >
            <Text
                fontFamily="body"
                fontWeight={100}
                color={tagFontColor}
            // fontSize="lg"
            >
                {"#" + text}
            </Text>
        </Pressable>
    );
};

const memoizedHashtag = React.memo(Hashtag);
export { memoizedHashtag as Hashtag };
