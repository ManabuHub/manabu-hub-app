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
  authorName: string;
  postTime: number;
  likeNum: number;
  commentNum: number;
  saveNum: number;
  title: string;
  body: string;
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
        <HStack alignItems="center" height="36px">
          <CustomText color={Color.TEXT} fontType={FontType.EXSMALL_BOLD}>
            {authorName}
          </CustomText>
          <Box display="flex" flexDirection="row">
            {postTime != 0 && (
              <Text color={Color.TEXT}>
                {postTime + "時間前"}
                {/* TODO いい感じに表示を変える */}
              </Text>
            )}
            {type == "like" && (
              <CustomMaterialIcon
                name={IconName.LIKE}
                size={actionButtonSize}
                color={Color.MAIN}
              />
            )}
            {type == "like" && likeNum != 0 && (
              <Text color={Color.TEXT}> {likeNum}</Text>
            )}
            {type == "detail" && (
              <CustomMaterialIcon
                name={IconName.CHAT}
                size={actionButtonSize}
                color={Color.MAIN}
              />
            )}
            {type == "detail" && commentNum != 0 && (
              <Text color={Color.TEXT}> {commentNum}</Text>
            )}
            {(type == "save" || type == "tl") && (
              <CustomMaterialIcon
                name={IconName.SAVE}
                size={actionButtonSize}
                color={Color.MAIN}
              />
            )}
            {type == "tl" && saveNum != 0 && (
              <Text color={Color.TEXT}> {saveNum}</Text>
            )}
          </Box>
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
