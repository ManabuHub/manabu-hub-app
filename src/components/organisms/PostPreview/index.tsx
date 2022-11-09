import * as React from "react";
import { Box, Spacer, Text, VStack, HStack, Divider } from "native-base";
import { Color } from "../../../constants/Color";
import { AlignedHashtag } from "../../molecules/AlignedHashtag";

interface PostPreviewProps {
  title: string;
  body: string;
  authorId: string;
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
  deleteTag,
}) => {
  return (
    <Box
      maxW="80"
      rounded="lg"
      bg={Color.BASE}
      //  overflow="hidden"
      padding={5}
      shadow="5"
    >
      <VStack display="flex" alignItems="start" space="1px">
        <Box>
          <HStack justifyContent="center">
            {/* <Avatar></Avatar> */}
            <Text fontFamily="body" fontWeight={500} fontSize="2xl">
              {authorId}
            </Text>
          </HStack>
        </Box>
        <Divider my={2} />
        <Box>
          <Text
            fontFamily="body"
            color={Color.MAIN}
            fontWeight={500}
            fontSize="3xl"
          >
            {title}
          </Text>
        </Box>
        <Divider my={2} />
        <Box>
          <Text fontFamily="body" color={Color.MAIN} fontWeight={500}>
            {body}
          </Text>
        </Box>
      </VStack>
      <Divider my={2} bgColor={Color.MAIN} />
      <Box margin="5px">
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          fontFamily="body"
          fontWeight={500}
          fontSize="3xl"
        >
          {title}
        </Text>
      </Box>
      <Divider my={2} bgColor={Color.MAIN} />
      <Box margin="5px">
        <Text numberOfLines={2} fontFamily="body" fontWeight={500}>
          {body}
        </Text>
      </Box>
      <AlignedHashtag
        tags={tags}
        onPress={() => {}}
        deleteTag={deleteTag}
        tagsHeight={10}
        numOfRows={1}
      />
      <Spacer />
    </Box>
  );
};

const memoizedPostPreview = React.memo(PostPreview);
export { memoizedPostPreview as PostPreview };
