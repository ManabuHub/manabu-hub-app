import { useState, useCallback, useMemo } from "react";
import {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from "react-native";

export const LineHeight = 27;

export const useWriteBody = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [numberOfLines, setNumberOfLines] = useState<number>(0);
  const displayNumberOfLines = useMemo(() => {
    return Math.max(numberOfLines, 12);
  }, [numberOfLines]);

  const onBodyHeightChange = useCallback(
    (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
      setNumberOfLines(
        Math.round(e.nativeEvent.contentSize.height / LineHeight)
      );
    },
    []
  );

  return {
    title,
    body,
    displayNumberOfLines,
    setTitle,
    setBody,
    onBodyHeightChange,
  };
};
