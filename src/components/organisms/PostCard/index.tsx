import * as React from "react";
import { Box, VStack, HStack, Divider } from "native-base";
import { Color } from "../../../constants/Color";
import { AlignedHashtags } from "../../molecules/AlignedHashtags";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { HashTagDisplayMode } from "../../atoms/Hashtag";

export enum PostCardType {
  PREVIEW = "preview",
}

interface PostPreviewProps {
  type: PostCardType;
  authorName: string;
  title: string;
  body: string;
  tags?: any;
  onTagPress: (name: string) => void;
}

const BackgroundColor = {
  [PostCardType.PREVIEW]: Color.BASE,
};

const PostCard: React.FC<PostPreviewProps> = ({
  type,
  authorName,
  title,
  body,
  tags,
  onTagPress,
}) => {
  return (
    <Box
      borderRadius="12px"
      backgroundColor={BackgroundColor[type]}
      padding={5}
      shadow={2}
      width="100%"
    >
      <VStack display="flex">
        <HStack alignItems="center" height="36px">
          <CustomText color={Color.TEXT} fontType={FontType.EXSMALL_BOLD}>
            {authorName}
          </CustomText>
        </HStack>

        <Divider
          width="100%"
          height="0"
          borderBottomColor={Color.MAIN}
          borderBottomWidth="1"
        />
        <Box marginY="8px">
          <CustomText color={Color.TEXT} fontType={FontType.MAIN_BOLD}>
            {title}
          </CustomText>
        </Box>
        <Divider
          width="100%"
          height="0"
          borderBottomColor={Color.MAIN}
          borderBottomWidth="1"
        />
        <Box marginBottom="12px">
          <CustomText
            color={Color.TEXT}
            fontType={FontType.SMALL}
            lineLimit={2}
            underline
          >
            {body}
          </CustomText>
        </Box>
      </VStack>
      <AlignedHashtags
        tags={tags}
        onTagPress={onTagPress}
        displayMode={HashTagDisplayMode.PRIMARY}
      />
    </Box>
  );
};

const memoizedPostCard = React.memo(PostCard);
export { memoizedPostCard as PostCard };
