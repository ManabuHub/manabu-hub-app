import * as React from "react";
import { Box } from "native-base";
import { Hashtag, HashTagDisplayMode } from "../../atoms/Hashtag";

interface AlignedHashtagProps {
  tags: string[];
  displayMode: HashTagDisplayMode;
  onTagPress?: (tag: string) => void;
}

const AlignedHashtags: React.FC<AlignedHashtagProps> = ({
  tags,
  displayMode,
  onTagPress,
}) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" overflow="hidden">
      {tags.map((tag) => (
        <Hashtag
          key={tag}
          onPress={() => {
            onTagPress?.(tag);
          }}
          displayMode={displayMode}
          text={tag}
        />
      ))}
    </Box>
  );
};

const memoizedAlignedHashtags = React.memo(AlignedHashtags);
export { memoizedAlignedHashtags as AlignedHashtags };
