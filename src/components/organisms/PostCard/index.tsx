import * as React from "react";
import { Box, VStack, HStack, Divider, Text } from "native-base";
import { Color } from "../../../constants/Color";
import { AlignedHashtags } from "../../molecules/AlignedHashtags";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { HashTagDisplayMode } from "../../atoms/Hashtag";
import { IconName } from "../../../constants/IconName";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";

export enum PostCardType {
  PLANE = "plane",
  COMMENT = "comment",
  LIKE = "like",
  SAVE = "save",
  PREVIEW = "preview",
  TL = "tl",
  DETAIL = "detail",
}

interface PostPreviewProps {
  type: PostCardType;
  title: string;
  body: string;
  authorName: string;
  postTime?: number;
  likeNum?: number;
  commentNum?: number;
  saveNum?: number;
  tags?: any;
  onTagPress: (name: string) => void;
}

const BackgroundColor = {
  [PostCardType.PLANE]: Color.WHITE_100,
  [PostCardType.COMMENT]: Color.WHITE_100,
  [PostCardType.LIKE]: Color.WHITE_100,
  [PostCardType.SAVE]: Color.WHITE_100,
  [PostCardType.PREVIEW]: Color.BASE,
  [PostCardType.TL]: Color.WHITE_100,
  [PostCardType.DETAIL]: Color.WHITE_100,
};

const PostCard: React.FC<PostPreviewProps> = ({
  type,
  authorName,
  postTime,
  likeNum,
  commentNum,
  saveNum,
  title,
  body,
  tags,
  onTagPress,
}) => {
  const hashMode =
    type === PostCardType.PREVIEW
      ? HashTagDisplayMode.PRIMARY
      : HashTagDisplayMode.TLNORMAL;
  const actionButtonSize = "6px";

  return (
    <Box
      borderRadius="12px"
      backgroundColor={BackgroundColor[type]}
      padding={5}
      shadow={2}
      width="100%"
    >
      <VStack display="flex">
        <HStack
          alignItems="center"
          height="36px"
          justifyContent="space-between"
          mb="8px"
        >
          <HStack alignItems="center" space="8px">
            <Box
              height="32px"
              width="32px"
              borderRadius="16px"
              backgroundColor={Color.MEDIUM_GRAY}
            />
            <CustomText color={Color.TEXT} fontType={FontType.EXSMALL_BOLD}>
              {authorName}
            </CustomText>
          </HStack>
          <HStack>
            {postTime && (
              <Text color={Color.TEXT}>
                {postTime + "時間前"}
                {/* TODO いい感じに表示を変える */}
              </Text>
            )}
            {type == PostCardType.LIKE && (
              <CustomMaterialIcon
                name={IconName.LIKE}
                size={actionButtonSize}
                color={Color.MAIN}
              />
            )}
            {type == PostCardType.LIKE && likeNum && (
              <Text color={Color.TEXT}> {likeNum}</Text>
            )}
            {type == PostCardType.DETAIL && (
              <CustomMaterialIcon
                name={IconName.CHAT}
                size={actionButtonSize}
                color={Color.MAIN}
              />
            )}
            {type == PostCardType.DETAIL && commentNum && (
              <Text color={Color.TEXT}> {commentNum}</Text>
            )}
            {(type == PostCardType.SAVE || type == PostCardType.TL) && (
              <CustomMaterialIcon
                name={IconName.SAVE}
                size={actionButtonSize}
                color={Color.MAIN}
              />
            )}
            {type == PostCardType.TL && saveNum && (
              <Text color={Color.TEXT}> {saveNum}</Text>
            )}
          </HStack>
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
        displayMode={hashMode}
      />
    </Box>
  );
};

const memoizedPostCard = React.memo(PostCard);
export { memoizedPostCard as PostCard };
