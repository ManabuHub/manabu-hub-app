import * as React from "react";
import { useState } from "react"
import {
    ButtonColorScheme,
    ButtonStyles,
} from "../../../constants/ButtonColorScheme";
import { FontType } from "../../../constants/Font";
import { IconName } from "../../../constants/IconName";
import { Box, Spacer, Text, VStack, HStack, Divider, Pressable } from "native-base";
import { Color } from "../../../constants/Color";
import { Hashtag } from "../../atoms/Hashtag"
import { stringify } from "@firebase/util";
// https://stackoverflow.com/questions/54851739/limit-the-length-of-nativebase-text
interface AlignedHashtagProps {
    // type: PostType;
    tags: any;
    onPress: () => void;
    deleteTag: any;
    tagsHeight: number;
    numOfRows: number;
}

// enum PostType {
//     QUESTION = "question",
//     KNOWLEDGE = "knowledge"
// }


const AlignedHashtag: React.FC<AlignedHashtagProps> = ({
    tags,
    deleteTag,
    tagsHeight,
    numOfRows
    // colorScheme = ButtonColorScheme.PRIMARY,
    // isDisabled = false,
}) => {
    const delTag = (tName: string) => {
        deleteTag(tName);
    }
    let AlignedHashtags = []
    for (let i = 0; i < tags.length; i++) {
        AlignedHashtags.push(<Hashtag
            onPress={() => { delTag(tags[i].tagName) }}//this.props.onClick()
            text={tags[i].tagName}
            isSelected={tags[i].isSelected}
            tagsHeight={tagsHeight}
        />)
    }
    return (
        <Box display="flex" flexDirection="row"
            flexWrap="wrap"
            overflow="hidden"
            height={tagsHeight * (numOfRows)}>
            {AlignedHashtags}

        </Box>);
};


const memoizedAlignedHashtag = React.memo(AlignedHashtag);
export { memoizedAlignedHashtag as AlignedHashtag };