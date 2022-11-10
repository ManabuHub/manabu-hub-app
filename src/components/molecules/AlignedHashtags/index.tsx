import * as React from "react";
import { Box } from "native-base";
import { Hashtag } from "../../atoms/Hashtag";

interface AlignedHashtagProps {
  tags: any;
  numOfRows: number;
  onPress: (name: string) => void;
}

const AlignedHashtags: React.FC<AlignedHashtagProps> = ({ tags, onPress }) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" overflow="hidden">
      {tags.map((tag) => (
        <Hashtag
          onPress={() => {
            onPress(tag.tagName);
          }}
          text={tag.tagName}
          isSelected={tag.isSelected}
        />
      ))}
    </Box>
  );
};

const memoizedAlignedHashtags = React.memo(AlignedHashtags);
export { memoizedAlignedHashtags as AlignedHashtags };
