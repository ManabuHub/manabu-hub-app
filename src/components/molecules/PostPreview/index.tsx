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
import { AlignedHashtag } from "../AlignedHashtag"
// https://stackoverflow.com/questions/54851739/limit-the-length-of-nativebase-text
interface PostPreviewProps {
  title: string;
  body: string;
  authorId: string;
  // type: PostType;
  tags: any;
  deleteTag: any;
}

// enum PostType {
//     QUESTION = "question",
//     KNOWLEDGE = "knowledge"
// }


const PostPreview: React.FC<PostPreviewProps> = ({
  authorId,
  title,
  body,
  tags,
  deleteTag
}) => {
  return (

    <Box maxW="80" rounded="lg"
      bg={Color.BASE}
      //  overflow="hidden" 
      padding={5}
      shadow="5"
    >
      <VStack display="flex" alignItems="start" space="1px">
        <Box>
          <HStack justifyContent="center">
            {/* <Avatar></Avatar> */}
            <Text
              fontFamily="body"
              fontWeight={500}
              fontSize="2xl"
            >
              {authorId}
            </Text>
          </HStack>
        </Box>
        <Divider my={2} />
        <Box margin="5px">
          <Text numberOfLines={2} ellipsizeMode="tail"
            fontFamily="body"
            fontWeight={500}
            fontSize="3xl"
          >
            {title}
          </Text>
        </Box>
        <Divider my={2} />
        <Box margin="5px">
          <Text numberOfLines={2}
            fontFamily="body"
            fontWeight={500}
          >
            {body}
          </Text>
        </Box>
        <AlignedHashtag tags={tags} onPress={() => { }}
          deleteTag={deleteTag} tagsHeight={10} numOfRows={1} />
        <Spacer />
      </VStack>

    </Box>
  );
};

const memoizedPostPreview = React.memo(PostPreview);
export { memoizedPostPreview as PostPreview };
