import * as React from "react";
import { Box } from "native-base";
import { Hashtag } from "../../atoms/Hashtag";
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
  numOfRows,
  // colorScheme = ButtonColorScheme.PRIMARY,
  // isDisabled = false,
}) => {
  const delTag = (tName: string) => {
    deleteTag(tName);
  };
  const alignedHashtags: JSX.Element[] = [];
  for (let i = 0; i < tags.length; i++) {
    alignedHashtags.push(
      <Hashtag
        onPress={() => {
          delTag(tags[i].tagName);
        }} //this.props.onClick()
        text={tags[i].tagName}
        isSelected={tags[i].isSelected}
        tagsHeight={tagsHeight}
      />
    );
  }
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      overflow="hidden"
      height={tagsHeight * numOfRows}
    >
      {alignedHashtags}
    </Box>
  );
};

const memoizedAlignedHashtag = React.memo(AlignedHashtag);
export { memoizedAlignedHashtag as AlignedHashtag };
