import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState, useCallback, useMemo } from "react";
import {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from "react-native";
import { ScreenName } from "../../../constants/ScreenName";
import { getTextLength } from "../../../utils/getTextLength";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";

export const LineHeight = 27;

export const useWriteBody = (
  navigation: NativeStackNavigationProp<any, any>
) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { emitAlert } = useAlert();

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

  const validateInput = useCallback(() => {
    if (getTextLength(title) > 100) {
      emitAlert({
        title: "入力エラー",
        message: "タイトルは全角50文字以内で入力してください",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (getTextLength(body) > 2000) {
      emitAlert({
        title: "入力エラー",
        message: "本文は1000文字以内で入力してください",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    return true;
  }, [title, body, emitAlert]);

  const handleNext = useCallback(() => {
    const isValidate = validateInput();
    if (!isValidate) {
      return;
    }
    navigation.navigate(ScreenName.NEW_POST, {
      screen: ScreenName.SELECT_HASHTAG,
      params: { title, body },
    });
  }, [navigation, title, body, validateInput]);

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
function emitAlert(arg0: {
  title: string;
  message: string;
  buttons: { text: string; style: any }[];
}) {
  throw new Error("Function not implemented.");
}
