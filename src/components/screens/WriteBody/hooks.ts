import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState, useCallback, useMemo } from "react";
import {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from "react-native";
import { ScreenName } from "../../../constants/ScreenName";

export const LineHeight = 27;

export const useWriteBody = (
  navigation: NativeStackNavigationProp<any, any>
) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [numberOfLines, setNumberOfLines] = useState<number>(0);
  const displayNumberOfLines = useMemo(() => {
    return Math.max(numberOfLines, 12);
  }, [numberOfLines]);

  const isFilled = useMemo(() => {
    return title.trim().length !== 0 && body.trim().length !== 0;
  }, [title, body]);

  const onBodyHeightChange = useCallback(
    (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
      setNumberOfLines(
        Math.round(e.nativeEvent.contentSize.height / LineHeight)
      );
    },
    []
  );

  const handleNext = useCallback(() => {
    navigation.navigate(ScreenName.NEW_POST, {
      screen: ScreenName.SELECT_HASHTAG,
      params: { title, body },
    });
  }, [title, body]);

  return {
    title,
    body,
    displayNumberOfLines,
    isFilled,
    setTitle,
    setBody,
    onBodyHeightChange,
    handleNext,
  };
};
